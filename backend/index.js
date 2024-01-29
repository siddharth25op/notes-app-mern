const express = require("express");
const connection = require("./db");
const cors = require("cors");

connection();
const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(PORT, (req, res) => {
  console.log(`Backend is running on port ${PORT}`);
});
