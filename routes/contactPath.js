import { createContact, deleteContactById, getAllcontact, getContactById, updateContactById } from "../controllers/contactController.js";
import express from 'express';

const contactRouter = express.Router();

contactRouter.post("/createContact", createContact);
contactRouter.get("/getAllContact", getAllcontact);
contactRouter.get("/getContactById/:id", getContactById);
contactRouter.delete("/deleteContactById/:id", deleteContactById);
contactRouter.put("/updateContactById/:id", updateContactById);

export default contactRouter;