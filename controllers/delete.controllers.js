const del = require("../services/delete");

module.exports = async function(req, res) {
    const {postId} = req.body;
    const resOrg = await del.deletePostWithPostId(postId);
    res.render("pages/delete-result.ejs", {postId: postId, status: resOrg.status});
}
