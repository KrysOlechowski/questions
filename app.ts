import express from "express";

const app = express();
const port = process.env.PORT || 3001;
import path from "path";

const publicPath = path.join(__dirname, "..", "build");
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
