// script creado para definir las rutas de los carritos

// paquetes
const express = require('express');
const router = express.Router();
// importar el controlador
const cartsController = require('../controllers/cartsController');

// Uso del metodo GET para los controladores de los carritos
router.get('/api/carts', cartsController.allcarts);


// exportamos las rutas de los carritos
module.exports = router;