import express from "express";
import { createProduct, deleteProductById, getAllProduct, getProductById, updateProductById } from "../controllers/productController.js";
import upload from "../middlewares/multer.js";

const productRouter = express.Router();

productRouter.post('/createProduct', upload.single('productImage'), createProduct);
productRouter.get('/getAllProduct', getAllProduct);
productRouter.get('/getProductById/:id', getProductById);
productRouter.delete('/deleteProductById/:id',deleteProductById);
productRouter.put('/updateProductById/:id', updateProductById);
export default productRouter;