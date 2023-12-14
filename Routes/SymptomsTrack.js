import express from "express";
import { register } from "../Controllers/SymptomsTrack.js";
import { login } from "../Controllers/SymptomsTrack.js";

const router = express.Router()

router.post("/register", register)
router.post("/login", login)

export default router 