const read = require("../services/read");

module.exports = async function(req, res) {
    let data;
    if (req.query.userId) {
        data = await read.getPostsWithUserId(req.query.userId);
    } else if (req.query.postId) {
        data = await read.getPostWithPostId(req.query.postId);
    } else {
        data = await read.getPosts();
    }
    res.render("pages/read-result.ejs", {data: JSON.stringify(data, null, 2)});
}
