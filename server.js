const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static(__dirname + "/dist/pld-pwa"));

// app.all("*", (req, res) => {
//   res.status(200).sendFile(__dirname + "/dist/pld-pwa/index.html");
// });

app.use(express.static(__dirname + "/dist/pld-pwa"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/pld-pwa/index.html"));
});

port = 8080;

app.listen(port, () => {
  console.log(`Our API is running on ${port}`);
});
