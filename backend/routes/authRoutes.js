import User from "../models/User.js";
import express from "express";
import { postLogin, postRegister } from "../controllers/auth/authController.js";
import Joi from "joi";
import expressjoivalidation from "express-joi-validation";
import authMiddleware from "../middleware/authMiddleware.js";

const validator = expressjoivalidation.createValidator({});

const registerSchema = Joi.object({
  email: Joi.string().required().email(),
  username: Joi.string().min(3).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  token: Joi.string(),
});

const router = express.Router();

router.get("/login", validator.body(loginSchema), postLogin);
router.post("/register", validator.body(registerSchema), postRegister);

router.get("/user", authMiddleware, async (req, res) => {
  console.log(req.user);
  // Search for user in database
  const user = await User.findById(req.user.id);

  // Return user
  res.status(201).json({ user });
});

export default router;
