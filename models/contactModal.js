import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const contactSchema = new Schema(
    {
        names:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        subject:{
            type: String,
            required: true
        },
        messages:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: false
        }
    },
    {
      timestamps: true  
    }
)

const Contact = model("contact", contactSchema)
export default Contact;