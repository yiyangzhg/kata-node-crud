const fetch = require("node-fetch");
const api = require("./api");

async function putRequest(url, data) {
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    return await response.json();
}

async function patchRequest(url, data) {
    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    return await response.json();
}

async function updatePostWithPostId(postId, title, body, userId) {
    const url = api.RESOURCES.posts + "/" + postId;
    let responseData = await putRequest(url, {
        id: postId,
        title: title,
        body: body,
        userId: userId,
    });
    console.log(responseData);
    return responseData;
}

module.exports = {
    updatePostWithPostId: updatePostWithPostId,
}