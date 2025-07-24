// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Hello from DevOps App 🚀" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
