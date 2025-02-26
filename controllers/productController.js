import { v2 as cloudinary } from "cloudinary";
import Product from "../models/productModal.js";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_API_SECRET,
});
export default cloudinary;
export const createProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Product image required" });
        }

        const cloudinaryResult = await cloudinary.uploader.upload(req.file.path, {
            folder: "products"
        });

        console.log("Cloudinary Response:", cloudinaryResult);

        const { productName, productPrice, productCategory, productDiscount } = req.body

        const newProduct = new Product({ productName, productPrice, productCategory, productDiscount, productImage: cloudinaryResult.secure_url });

        await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: newProduct
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching products", details: error.message });
    }
}
export const getProductById = async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({error: "Error fetching product", details: error.message});
    }
}
export const deleteProductById = async (req, res) =>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully"});
    }
    catch(error){
        res.status(500).json({ error: "Error deleting product", details: error.message });
    }
}
export const updateProductById = async (req, res) =>{
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body,{new: true, runValidators: true});
        
    if(!product){
        return res.status(404).json({error: "Product not found"});
    }
    res.status(200).json({message: "Product updated successfully"});
}
catch(error){
    res.status(500).json({ error: "Error updating product", details: error.message });
}
}