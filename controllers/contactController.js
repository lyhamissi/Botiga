import Contact from "../models/contactModal.js";
export const createContact = async (req, res) => {
    try {
        const { names, email, subject, messages, phone } = req.body;
        const newContact = new Contact({ names, email, subject, messages, phone });

        await newContact.save();

        res.status(201).json({ success: true, message: "Contact created successfully", contact: newContact });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
}

export const getAllcontact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ success: true, contacts })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
}
export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const contacts = await Contact.findById(id);
        if (!contacts) {
            return res.status(404).json({ success: false, message: "Contact not found" })
        }
        res.status(200).json({ success: true, contacts })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
}

export const deleteContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
            return res.status(404).json({ success: false, message: "Contact not found" })
        }
        res.status(200).json({ success: true, message: "Contact Deleted Successfully" })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
}
export const updateContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body);
        if (!updatedContact) {
            return res.status(404).json({ success: false, message: "Contact not found" })
        }
        res.status(200).json({ success: true, message: "Contact Updated Successfully" , updatedContact})
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
}