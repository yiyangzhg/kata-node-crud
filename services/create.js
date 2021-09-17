const fetch = require("node-fetch");
const api = require("../utils/api");

async function postRequest(url, data) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    return await response.json();
}

async function createPost(title, body, userId) {
    const url = api.RESOURCES.posts;
    let responseData = await postRequest(url, {
        title: title,
        body: body,
        userId: userId,
    });
    console.log(responseData);
    return responseData;
}

module.exports = {
    createPost: createPost,
}
