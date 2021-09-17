const fetch = require("node-fetch");
const api = require("../utils/api");

async function deleteRequest(url) {
    return await fetch(url, {
        method: "DELETE",
    });
}

async function deletePostWithPostId(postId) {
    const url = api.RESOURCES.posts + "/" + postId;
    const response = await deleteRequest(url);
    if (response.status === 200) {
        console.log("Post " + postId+ " has been deleted successfully.");
    } else {
        console.log("Oops! Something went wrong...");
    }
    return response;
}

module.exports = {
    deletePostWithPostId: deletePostWithPostId,
}
