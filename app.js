// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("🚀 CI/CD working or not???");
});


app.get("/about", (req, res) => {
  console.log("Updated About Route Hit!");
  res.send("This is the UPDATED About Page!");
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});


