import jwt from "jsonwebtoken";

export function verifyAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id; // falls du ihn brauchst
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}