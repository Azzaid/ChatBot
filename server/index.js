const express = require('express');
const path = require('path');
const botMessageRouter = require('./routes/botControl')

const app = express();
const port = 3000;

//serve bot control api
app.use('api/bot', botMessageRouter);

//serve static admin react panel
app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Seth listening on port ${port}`)
});