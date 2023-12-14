import express from "express";
import { searchsymptoms } from "../Controllers/SymptomsTrack.js";
import { addsymptoms } from "../Controllers/SymptomsTrack.js";
import { deletesymptom } from "../Controllers/SymptomsTrack.js";

const router = express.Router()

router.get("/searchsymptoms", searchsymptoms)
router.post("/addsymptoms", addsymptoms)
router.delete("/deletesymptom", deletesymptom)

export default router 