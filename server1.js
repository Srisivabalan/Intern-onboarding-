const express = require("express");
const app = express();
const PORT = 3001;


// Middleware to parse JSON
app.use(express.json());

// In-memory user storage
let users = [];

// Day 3 endpoints (optional – keep if needed)
app.get("/health", (req, res) => {
  res.json({ status: "Server is running fine" });
});

app.get("/hello", (req, res) => {
  res.send("Hello! Welcome to my Express server 🚀");
});

app.get("/time", (req, res) => {
  res.json({ currentTime: new Date().toLocaleString() });
});


// POST /add-user
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
});

// GET /users
app.get("/users", (req, res) => {
  res.json({
    totalUsers: users.length,
    users
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
