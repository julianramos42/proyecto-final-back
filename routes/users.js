import express from 'express'

let router = express.Router();

router.get('/', function(req, res, next) {
    return res.status(200).json({
        message: 'aca estan todos los users'
    });
  });

export default router