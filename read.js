import fetch from "node-fetch";
import {RESOURCES} from "./api.js";

async function getJson(url) {
    const response = await fetch(url);
    return await response.json();
}

function getPosts() {
    let url = RESOURCES.posts;
    getJson(url).then(data => console.log(data));
}

function getPostWithPostId(postId) {
    let url = RESOURCES.posts + "/" + postId;
    getJson(url).then(data => console.log(data));
}

function getPostsWithUserId(userId) {
    let url = RESOURCES.posts + "?userId=" + userId;
    getJson(url).then(data => console.log(data));
}

function getComments() {
    let url = RESOURCES.comments;
    getJson(url).then(data => console.log(data));
}

function getCommentWithCommentId(commentId) {
    let url = RESOURCES.comments + "/" + commentId;
    getJson(url).then(data => console.log(data));
}

function getCommentsWithPostId(postId) {
    let url = RESOURCES.posts + "/" + postId + "/comments";
    getJson(url).then(data => console.log(data));
}