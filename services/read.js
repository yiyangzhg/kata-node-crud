const fetch = require("node-fetch");
const api = require("../utils/api");

async function getRequest(url) {
    const response = await fetch(url);
    return await response.json();
}

async function getPosts() {
    const url = api.RESOURCES.posts;
    let data = await getRequest(url);
    console.log(data);
    return data;
}

async function getPostWithPostId(postId) {
    const url = api.RESOURCES.posts + "/" + postId;
    let data = await getRequest(url);
    console.log(data);
    return data;
}

async function getPostsWithUserId(userId) {
    const url = api.RESOURCES.posts + "?userId=" + userId;
    let data = await getRequest(url);
    console.log(data);
    return data;
}

module.exports = {
    getPosts: getPosts,
    getPostWithPostId: getPostWithPostId,
    getPostsWithUserId: getPostsWithUserId,
};
