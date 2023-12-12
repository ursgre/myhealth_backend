import express from "express";
import { register } from "../Controllers/SleepTrack.js";
import { login } from "../Controllers/SleepTrack.js";

const router = express.Router()

router.post("/register", register)
router.post("/login", login)

export default router 