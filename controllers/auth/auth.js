import User from '../../models/User.js'
import Crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import createMailTransporter from '../../config/mailer.js'

const controller = {

    sign_up: async (req, res, next) => {
        req.body.is_online = false
        req.body.is_admin = false
        req.body.is_seller = false
        req.body.photo = "https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-cyber-man-icon-isolated-on-abstract-background-png-image_1779361.jpg"
        req.body.is_verified = false
        req.body.verify_code = Crypto.randomBytes(10).toString('hex')
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
        try {
            const user = await User.create(req.body)

            createMailTransporter(user)//envio del mail para verificacion
                .then(info => console.log(info))
                .catch(error => console.log(error))

            return res.status(201).json({
                succes: true,
                message: 'User Registered!'
            })
        } catch (error) {
            next(error)
        }
    },

    sign_in: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = jsonwebtoken.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: 60 * 60 * 24 * 7 }
            )
            return res.status(200).json({
                succes: true,
                message: 'Logged in!',
                user,
                token
            })
        } catch (error) {
            next(error)
        }
    },

    sign_out: async (req, res, next) => {
        const { email } = req.user
        try {
            await User.findOneAndUpdate(
                { email },
                { is_online: false },
                { new: true }
            )
            return res.status(200).json({
                succes: true,
                message: 'Offline user!'
            })
        } catch (error) {
            next(error)
        }
    },

    sign_in_token: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email }, //parametro de busqueda
                { is_online: true }, //parámetro a modificar
                { new: true } //para que devuelva el objeto modificado
            )
            user.password = null //para proteger la contraseña
            const token = jsonwebtoken.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: 60 * 60 * 24 * 7 }
            )
            return res.status(200).json({
                succes: true,
                message: 'Logged in!',
                user,
                token
            })
        } catch (error) {
            next(error)
        }
    },

    verifyMail: async (req, res, next) => {
        try {
            const verify_code = req.query.verify_code
            if (!verify_code) return res.status(404).json('Verify Code not found...')

            const user = await User.findOne({ verify_code })

            if (user) {
                user.verify_code = ''
                user.is_verified = true

                await user.save()

                const token = jsonwebtoken.sign(
                    { id: user._id }, //datos a encriptar
                    process.env.SECRET, //llave para poder encriptar y luego desencriptar
                    { expiresIn: 60 * 60 * 24 * 7 } //tiempo de expiracion en segundos
                )

                res.status(200).json({
                    _id: user._id,
                    name: user.name,
                    mail: user.email,
                    token,
                    is_verified: user?.is_verified
                })
            } else res.status(404).json('Mail verification failed, invalid token')

        } catch (error) {
            console.log(error)
            res.status(500).json(error.message)
        }
    }
}

export default controller