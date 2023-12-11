import User from "../Models/UserSchema.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, password, weight, height, gender, dob, goal, activityLevel } = req.body;
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exsisted!" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
       await User.create({
            name,
            password: hashedPassword,
            email,
            weight,
            height,
            gender,
            dob,
            goal,
            activityLevel
        });

    
        //await newUser.save(); // Await the save operation

        res.status(201).json({ message: "User created" });

    }
    catch (err) {
        console.log(err)
    }
}