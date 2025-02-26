import Blog from "../models/blogModal.js";

export const createBlog = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const imageUrl = req.file ? req.file.path : null;

        if (!title || !description || !imageUrl) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newBlog = new Blog({ title, description, date, imageUrl });
        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create blog" });
    }
};
export const getAllBlog = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(201).json(blogs);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
};
export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(201).json(blog);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
};
export const updateBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndUpdate(id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(201).json({ message: "Blog updated successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update blog" });
    }
};
export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Error deleting blog", details: error.message });
    }
};
