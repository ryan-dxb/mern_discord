import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const postLogin = async (req, res) => {
  const { email, password, token } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    console.log(user);

    // Create and assign a token
    const token = jwt.sign({ id: user._id, email }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    // Return user
    res.status(201).json({ user, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error, Please try again later");
  }
};

export default postLogin;
