import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        imageUrl: {
            type: String,
            required: true
        }
    }
);
const Blog = model("blog", blogSchema)
export default Blog;