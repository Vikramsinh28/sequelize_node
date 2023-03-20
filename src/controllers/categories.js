const db = require('../db/models/index.js');
const Categories = db.categories;

// get categories

const getCategories = async (req, res) => {
    try {
        const result = await Categories.findAll();
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send(err);
    }
}

// post categories

const addCategories = async (req, res) => {
    try{
        const result = await Categories.create(req.body);
        res.status(200).send(result)
    }catch(err) {
        res.status(400).send(err)
    }
}

// update categories

const updateCategories = async (req, res) => {
    try{
        const result = await Categories.update(req.body , {
            where : {
                id : req.header('id')
            }
        });
        res.status(200).send(result)

    }catch(err) {
        res.status(400).send(err)
    }
}

// delete categories

const deleteCategories = async (req, res) => {
    try{
        const result = await Categories.destroy({
            where : {
                id : req.header('id')
            }
        });
        res.status(200).send(result)
    }catch(err) {
        res.status(400).send(err)
    }
}

module.exports = {
    getCategories,
    addCategories,
    updateCategories,
    deleteCategories
}