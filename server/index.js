const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use((req, res, next) => {
  console.log("request", req);
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Seth listening on port ${port}`)
});