import express from 'express';
import contactRouter from './contactPath.js';
import productRouter from './productRoute.js';
import blogRouter from './blogRoutes.js';
import userRouter from './userRoute.js';
const mainRouter = express.Router();
mainRouter.use("/contact", contactRouter)
mainRouter.use("/product", productRouter)
mainRouter.use("/blog", blogRouter)
mainRouter.use("/user",userRouter);
export default mainRouter;