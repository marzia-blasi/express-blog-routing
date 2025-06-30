const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts.js");

app.use(express.static("imgs"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
