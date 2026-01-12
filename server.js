const express = require("express");
const app = express();
const PORT = 3000;

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Server is running fine" });
});

// Hello endpoint
app.get("/hello", (req, res) => {
  res.send("Hello! Welcome to my Express server!");
});

// Time endpoint
app.get("/time", (req, res) => {
  res.json({ currentTime: new Date().toLocaleString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
