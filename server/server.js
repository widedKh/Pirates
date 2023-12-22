const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
require("./config/mongoose.config");
require("./routes/pirate.routes")(app);

app.listen(5000, () => {
  console.log("Listening at Port 5000");
});