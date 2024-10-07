import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data (this is a simple file-based example)
    const users = JSON.parse(fs.readFileSync(filePath, "utf8")) || [];
    users.push({ username, email, password: hashedPassword });
    fs.writeFileSync(filePath, JSON.stringify(users));

    res.status(200).json({ message: "User registered successfully!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
