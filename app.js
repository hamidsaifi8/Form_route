const express = require("express");
const app = express();
const PORT = 3007;
const path = require("path");

const homeRouter = require("./routes/homeRoutes");
const formRouter = require("./routes/formRoutes");

app.use(express.urlencoded());

app.use(homeRouter);
app.use(formRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "view", "Error.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
