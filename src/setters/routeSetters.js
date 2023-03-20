const express = require('express');
const productRoutes = require('../routes/productRoute.js');
const categoryRoutes = require('../routes/categoryRoute.js');
const productCategoryRoutes = require('../routes/productCategoryRoute.js');

const router = express.Router();

router.use('/product' , productRoutes);
router.use('/category' , categoryRoutes);
router.use('/productCategory' , productCategoryRoutes);


const getAllRoutes = (app) => {
    app.use(router);
};

module.exports = getAllRoutes;