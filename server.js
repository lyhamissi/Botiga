import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mainRouter from './routes/indexRouting.js';
import bodyParser from 'body-parser';
dotenv.config();

const port = process.env.PORT || 3000
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASS;
const app = express();
app.use(bodyParser.json())
app.use('/', mainRouter);
// app.get('/getrequest',(req,res) => {
//     res.send("This is my first project in Node JS ")
// })
// const PORT=5000;
// app.listen(PORT,() => {
//     console.log(`The app is running on Port ${PORT}`);

// })
const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.yiuj0.mongodb.net/${db_name}?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
mongoose
    .connect(dbUri)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Node API is running on port http://localhost:${port}`);

        });
    })
    .catch((error) => {
        console.log(error);
    });