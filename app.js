const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`${process.env.PORT}에서 돌어가는 중입니다.`);
});
