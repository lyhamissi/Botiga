import express from "express";
import { createProduct, deleteProductById, getAllProduct, getProductById, updateProductById } from "../controllers/productController.js";
import upload from "../middlewares/multer.js";
import { admin} from "../middlewares/roleIdentification.js";
import { auth } from "../middlewares/tokenVerification.js";
const productRouter = express.Router();

productRouter.post('/createProduct', admin,auth,upload.single('productImage'), createProduct);
productRouter.get('/getAllProduct', getAllProduct);
productRouter.get('/getProductById/:id', getProductById);
productRouter.delete('/deleteProductById/:id',deleteProductById);
productRouter.put('/updateProductById/:id', updateProductById);
export default productRouter;