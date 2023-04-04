import Author from "../../models/Author.js"

async function finds_id(req, res, next) {
    const author = await Author.findOne({user_id: req.user._id});
    if (author) {
        req.body.author_id = author._id
        return next(); // Devuelve el id del usuario si es un autor
    } else {
        return res.status(404).json({
            succes: false,
            message: "error in find_id"
      }) // Devuelve null si el usuario no es un autor
    }
}

export default finds_id