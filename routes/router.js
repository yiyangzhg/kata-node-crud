const express = require("express");
const bodyParser = require("body-parser");
const read = require("../services/read");
const createController = require("../controllers/create.controllers");
const readController = require("../controllers/read.controllers");
const updateController = require("../controllers/update.controllers");
const deleteController = require("../controllers/delete.controllers");

const router = express.Router()
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get("/", (req, res) => {
    res.render("pages/index.ejs");
});
router.get("/create", (req, res) => {
    res.render("pages/create.ejs");
});
router.get("/read", (req, res) => {
    res.render("pages/read.ejs");
});
router.get("/update", async (req, res) => {
    const defaultPostId = 1;
    const data = await read.getPostWithPostId(defaultPostId);
    res.render("pages/update.ejs", {data: data});
});
router.get("/delete", (req, res) => {
    res.render("pages/delete.ejs");
});

router.post("/posts", urlencodedParser, createController);
router.get("/posts", readController);
router.put("/posts", urlencodedParser, updateController);
router.delete("/posts", urlencodedParser, deleteController);

module.exports = router;
