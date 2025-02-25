import express from 'express';
import contactRouter from './contactPath.js';
import productRouter from './productRoute.js';
const mainRouter = express.Router();
mainRouter.use("/contact", contactRouter)
mainRouter.use("/product", productRouter)
export default mainRouter;