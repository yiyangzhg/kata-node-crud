const express = require("express");
const router = require("./router");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(router);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})

module.exports = app;
