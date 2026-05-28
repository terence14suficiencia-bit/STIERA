const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());

/* ✅ SIGNUP ROUTE */
app.post("/api/users/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailAddress } = req.body;

    if (!firstName || !lastName || !emailAddress) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    await db.query(
      "INSERT INTO users (first_name, last_name, email, password, role, status) VALUES (?, ?, ?, ?, ?, ?)",
      [firstName, lastName, emailAddress, "123456", "student", "pending"],
    );

    res.json({
      message: "Signup successful",
    });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});

/* ✅ LOGIN ROUTE */
app.post("/api/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    const user = rows[0];

    if (!user) {
      return res.status(401).json({
        message: "Account not found",
      });
    }

    if (password !== user.password) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    if (user.role === "admin") {
      return res.json({
        message: "Admin login successful",
        role: "admin",
      });
    }

    if (user.status !== "approved") {
      return res.status(403).json({
        message: "Account pending approval",
      });
    }

    return res.json({
      message: "Login successful",
      role: "user",
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({
      message: "Server error",
    });
  }
});

/* ✅ START SERVER */
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
``;
