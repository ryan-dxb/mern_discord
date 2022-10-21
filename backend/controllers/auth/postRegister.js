import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const postRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user already exists
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Save user to database
    await newUser.save();

    console.log(newUser);

    // Create and assign a token
    const token = jwt.sign(
      { id: newUser._id, email },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Return user
    res.status(201).json({ newUser, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error, Please try again later");
  }
};

export default postRegister;
