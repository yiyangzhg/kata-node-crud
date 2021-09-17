const expect = require("chai").expect;
const read = require("../services/read");

describe("Read operation", function () {

    context("Posts resources", function () {
        it("should return an array with length of 100", async function () {
            const posts = await read.getPosts();
            expect(posts).to.be.an("array").with.lengthOf(100);
        });

        it("should return the post with id equal to 42", async function () {
            const postId = 42;
            const post = await read.getPostWithPostId(postId);
            expect(post).to.have.property("id", 42);
        });

        it("should return the post with userId equal to 8", async function () {
           const userId = 8;
           const post = await read.getPostsWithUserId(userId);
           expect(post).to.be.an("array");
        });
    });
});
