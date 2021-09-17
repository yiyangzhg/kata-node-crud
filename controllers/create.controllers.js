const create = require("../services/create");

module.exports = async function (req, res) {
    const {title, body, userId} = req.body;
    const data = await create.createPost(title, body, userId);
    res.render("pages/create-result.ejs", {data: JSON.stringify(data, null, 2)});
};
