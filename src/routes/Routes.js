import express from "express";
const Router = express.Router();
import { upload } from "../middleware/multer.js";
import extractEmailFromUrl from "../controller/extractEmailFromCsv.js";

Router.post("/", upload.single("csvFile"),extractEmailFromUrl);

export default Router ;