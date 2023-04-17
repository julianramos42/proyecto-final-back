import mercadopago from 'mercadopago'
import express from 'express'
import cors from "cors";
import createController from '../controllers/payments/create.js'
import passport from '../middlewares/passport.js';
import alreadyExists from '../middlewares/payments/alreadyExists.js'

let router = express.Router();

const { create } = createController

//mercadopago
router.post("/",cors(), (req, res) => {
  mercadopago.configure({access_token: req.body.token})

    let preference = {
      items: req.body.products,
      back_urls: {
        success: `https://lance-app.vercel.app/shop/${req.body.shopId}`,
        failure: "",
        pending: "",
      },
      auto_return: "approved",
      binary_mode: true,
    };
    mercadopago.preferences
      .create(preference)
      .then((response) => res.status(200).json({ response }))
      .catch((error) => res.status(400).json({ error: error.message }));
  });

  router.post('/:shopid', passport.authenticate("jwt", { session:false }), alreadyExists, create )
  
  export default router;