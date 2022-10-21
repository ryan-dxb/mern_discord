import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  let token = req.header["authorization"] || req.query.token || req.body.token;

  if (!token) return res.status(401).send("Access denied");

  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};

export default authMiddleware;
