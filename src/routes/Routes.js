import express from "express";
const Router = express.Router();
import { upload } from "../middleware/multer.js";

Router.post("/", upload.single("csvFile"),(req,res)=>{res.send("hello world")});

export default Router ;