import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Fetch user data
    const users = JSON.parse(fs.readFileSync(filePath, "utf8")) || [];
    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Create JWT token
    const token = jwt.sign({ username }, "your-secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
