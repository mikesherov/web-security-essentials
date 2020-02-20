const localHost = require("https-localhost");
const express = require("express");
const app = localHost("evil.com");

app.use(express.static(__dirname + "/static"));

// 🐨 Add /hijack endpoint to log the payload query parameter
// 💰 Here you go:
// app.route("/hijack").get((request, response) => {
//   console.log("received payload", request.query.payload);
//   response.status(200);
//   response.send("ok");
// });

app.listen(666);
