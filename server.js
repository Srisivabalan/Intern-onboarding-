const express = require("express");
const app = express();
const PORT = 3000;

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Server is running fine" });
});

<<<<<<< HEAD
// Hello endpoint
=======
>>>>>>> 885ec708e3dd2c5bd356fc3c1a2ea7d693e1f358
app.get("/hello", (req, res) => {
  res.send("Hello! Welcome to my Express server!");
});

<<<<<<< HEAD
// Time endpoint
=======
>>>>>>> 885ec708e3dd2c5bd356fc3c1a2ea7d693e1f358
app.get("/time", (req, res) => {
  res.json({ currentTime: new Date().toLocaleString() });
});

<<<<<<< HEAD
// Start server
=======
>>>>>>> 885ec708e3dd2c5bd356fc3c1a2ea7d693e1f358
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
