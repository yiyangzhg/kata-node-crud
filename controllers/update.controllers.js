const update = require("../services/update");

module.exports = async function(req, res) {
    const {postId, title, body, userId} = req.body;
    const data = await update.updatePostWithPostId(postId, title, body, userId);
    res.render("pages/update-result.ejs", {data: JSON.stringify(data, null, 2)});
}
