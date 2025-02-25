import mongoose from "mongoose";
const { model, Schema } = mongoose;

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: true
        },
        productPrice: {
            type: Number,
            required: true
        },
        productCategory: {
            type: String,
            required: true
        },
        productDiscount: {
            type: Number,
            default: 0
        },
        productImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Product = model('Product', productSchema);
export default Product;