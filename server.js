const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

/* middle ware for encoding urls, turning them to 
json and also making everything in the public folder accessible */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
  });
  