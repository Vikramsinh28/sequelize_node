const db = require('../db/models/index.js')
const Products = db.products;


// get product 

const getProduct = async (req, res) => {
    try{
        const result = await Products.findAll();
        res.send(result)
    }catch(err){
        console.log(err)
    }
}

// post product

const addProduct = async (req, res) => {
    try{
        const result = await Products.create(req.body);
        res.send(result)
    }catch(err){
        res.send(err);
    }
}

// update product

const updateProduct = async (req, res) => {
    const id = req.header('id');
     try {
        const result = await Products.update(req.body , {
            where: {    
                id : id
            }
        });
        res.status(200).json({'success' : true, 'result': result})
     } catch (err) {
        res.status(400).json({'success' : false, 'result': err})
     }
}


// delete product

const deleteProduct = async (req, res) => {
    const id = req.header('id');
    try {
        const result = await Products.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json({'success' : true, 'result': result})
    }catch(err){
        res.status(400).json({'success' : false, 'result': err})
    }
}


module.exports = {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}