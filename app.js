// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("🚀 Deployed using Docker and Render! I am learning fast and furiously");
});


app.get("/about", (req, res) => {
  res.send("This is the about page!");
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});


