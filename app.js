// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("🚀 CI/CD working!!!! I LOVE YOU DEVOPS");
});


app.get("/about", (req, res) => {
  console.log("Aboutt!!!!");
  res.send("About bolthe");
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});


