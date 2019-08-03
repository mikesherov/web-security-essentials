const localHost = require("https-localhost");
const express = require("express");
const app = localHost("evil.com");

app.use(express.static(__dirname + "/static"));

app.listen(666);
