import express from "express";
import { getAllSymptoms } from "../Controllers/Symptom.js";
import { addsymptoms } from "../Controllers/Symptom.js";
import { deletesymptom } from "../Controllers/Symptom.js";
import  checkAuthToken from "../Middlewares/checkAuthToken.js"

const router = express.Router()

router.get("/getAllSymptoms", checkAuthToken, getAllSymptoms)
router.post("/addsymptoms", addsymptoms)
router.delete("/deletesymptom", deletesymptom)

export default router 