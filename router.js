const express = require("express");
const bodyParser = require("body-parser");
const create = require("./services/create");
const read = require("./services/read");
const update = require("./services/update");
const del = require("./services/delete");

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

router.get("/update", async (req, res) => {
    const postId = 1;
    const data = await read.getPostWithPostId(1);
    res.render("pages/update.ejs", {data: data});
});

router.put("/posts", urlencodedParser, async (req, res) => {
    const {postId, title, body, userId} = req.body;
    const data = await update.updatePostWithPostId(postId, title, body, userId);
    res.render("pages/update-result.ejs", {data: JSON.stringify(data, null, 2)});
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
