import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        userEmail: {
            type: String,
            required: true
        },
        userPassword: {
            type: String,
            required: true
        },
        userRole: {
            type: String,
            default: user,
            required: true,
            enum: ["user", "admin"]
        }
    }
);
const User = model("user", userSchema)
export default User;