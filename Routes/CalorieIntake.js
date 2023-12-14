import express from "express";
import { addCalorieintake } from "../Controllers/CalorieIntake.js";
import { getcalorieintakebydate } from "../Controllers/CalorieIntake.js";
import { getcalorieintakebylimit } from "../Controllers/CalorieIntake.js";
import { deletecalorieintake } from "../Controllers/CalorieIntake.js";
import { getgoalcalorieintake } from "../Controllers/CalorieIntake.js";
import { test } from "../Controllers/CalorieIntake.js";

const router = express.Router()

router.get("/test", test)
router.post("/addCalorieintake", addCalorieintake)
router.post("/getcalorieintakebydate", getcalorieintakebydate)
router.post("/getcalorieintakebylimit", getcalorieintakebylimit)
router.delete("/deletecalorieintake", deletecalorieintake)
router.get("/getgoalcalorieintake", getgoalcalorieintake)

export default router 