const express = require("express");
const methodOverride = require("method-override");
const router = require("./routes/router");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(methodOverride("_method"))
app.use(router);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})

module.exports = app;
