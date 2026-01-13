const express = require("express");

const app = express();
const PORT = 3000;


app.use(express.json());


let users = [];


app.get("/health", (req, res) => {
  res.status(200).json({ status: "Server is running fine" });
});


app.get("/hello", (req, res) => {
  res.status(200).send("Hello! Welcome to my Express server");
});


app.get("/time", (req, res) => {
  res.status(200).json({
    currentTime: new Date().toLocaleString(),
  });
});


app.post("/add-user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});


app.get("/users", (req, res) => {
  res.status(200).json({
    totalUsers: users.length,
    users,
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
