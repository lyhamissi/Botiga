import { jwt } from "jsonwebtoken";
import dotenv from 'dotenv';
import User from "../models/userModal.js";

dotenv.config();

export const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message: "Authorization header missing"});
    }
    const token =authHeader.split(" ")[1];// Extract token from header

    if(!token){
        
    }
}