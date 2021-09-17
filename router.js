const express = require("express");
const bodyParser = require("body-parser");
const create = require("./create");
const read = require("./read");
const update = require("./update");
const del = require("./delete");

const router = express.Router()
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get("/", (req, res) => {
    res.render("pages/index.ejs");
});

router.get("/create", (req, res) => {
    res.render("pages/create.ejs");
});

router.post("/posts", urlencodedParser, async (req, res) => {
    const {title, body, userId} = req.body;
    const data = await create.createPost(title, body, userId);
    res.render("pages/create-result.ejs", {data: JSON.stringify(data, null, 2)});
});

router.get("/read", (req, res) => {
    res.render("pages/read.ejs");
});

router.get("/posts", async (req, res) => {
    let data;
    if (req.query.userId) {
        data = await read.getPostsWithUserId(req.query.userId);
    } else if (req.query.postId) {
        data = await read.getPostWithPostId(req.query.postId);
    } else {
        data = await read.getPosts();
    }
    res.render("pages/read-result.ejs", {data: JSON.stringify(data, null, 2)});
});

router.get("/update", (req, res) => {
    res.render("pages/update.ejs");
});

router.get("/delete", (req, res) => {
    res.render("pages/delete.ejs");
});

router.delete("/posts", urlencodedParser, async (req, res) => {
    const {postId} = req.body;
    const resOrg = await del.deletePostWithPostId(postId);
    res.render("pages/delete-result.ejs", {postId: postId, status: resOrg.status});
})

module.exports = router;
