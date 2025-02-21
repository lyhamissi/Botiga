import express from 'express';
import contactRouter from './contactPath.js';

const mainRouter = express.Router();
mainRouter.use("/contact", contactRouter)
export default mainRouter;