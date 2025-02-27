import User from "../models/userModal.js";

export const Admin = (req, res, next) => {
    if (req.User.userRole !== "admin") {
        return res.status(403).json({ message: "Access denied contact Admin please!" });
    }
    next();;
}