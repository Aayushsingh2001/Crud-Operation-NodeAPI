const Product = require('../models/product.model');

const postProduct = async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});     
    }
}

const updateProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not Found"});
        }
        const updatedProduct = await Product.findById(req.params.id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({message: "Product not Found"});
        }
        res.status(200).json({message: "Product Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    postProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
}