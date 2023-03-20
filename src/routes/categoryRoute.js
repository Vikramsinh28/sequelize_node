const express = require('express');
const { getCategories, addCategories, updateCategories, deleteCategories } = require('../controllers/categories');

const router = express.Router();

router.get('/' , getCategories);
router.post('/' , addCategories);
router.put('/' , updateCategories);
router.delete('/' , deleteCategories);


module.exports = router;