// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("🚀 CI/CD working!");
});


app.get("/about", (req, res) => {
  
  res.send("About Page");
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});


