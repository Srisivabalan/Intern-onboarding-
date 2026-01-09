const express = require("express");
const app = express();
const PORT = 3000;

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Server is running fine" });
});

app.get("/hello", (req, res) => {
  res.send("Hello! Welcome to my Express server!");
});

app.get("/time", (req, res) => {
  res.json({ currentTime: new Date().toLocaleString() });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
