const express = require("express");
const read = require("./read");

const router = express.Router()

router.get("/", (req, res) => {
    res.render("pages/index.ejs");
});

router.get("/create", (req, res) => {
    res.render("pages/create.ejs");
})

router.get("/read", (req, res) => {
    res.render("pages/read.ejs");
})

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
})

router.get("/delete", (req, res) => {
    res.render("pages/delete.ejs");
})

module.exports = router;
