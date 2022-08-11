const express = require("express");
const app = express();

const port = 1313;

app.get("/", (req, res) => {
  console.log("inicio");
  res.setHeader("Content-type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const intervalId = setInterval(() => {
    const date = new Date().toLocaleString();
    res.write(`data: ${date}\n\n`);
  }, 1000);

  res.on(`close`, () => {
    console.log(`fim`);
    res.end();
  });
});

app.listen(port, () => {
  console.log("hello");
});
