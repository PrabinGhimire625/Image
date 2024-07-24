import { Router } from "express";
import { createImage, getImage, updateImage, deleteImage, getSingleImage} from "../controller/imageController.js";
const router=Router()

import { storage } from "../middleware/multerConfig.js";
import multer from "multer"
const upload = multer({ storage });

//route
router.route("/image").post(upload.single('image'),createImage).get(getImage)
router.route("/image/:id").patch(upload.single('image'),updateImage).delete(deleteImage).get(getSingleImage)
export default router
