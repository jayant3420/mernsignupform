const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const route = require("./routes/index");
app.use(express.json());
app.use("/postdata", route);
app.listen(PORT, () => {
  console.log(`server running at port no ${PORT}`);
});
