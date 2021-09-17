const expect = require("chai").expect;
const update = require("../update");

describe("Update operation", function () {

    context("Posts resources", function () {
        context("PUT request", function () {
            it("should return the newly modified post", async function () {
                const postId = 42;
                const title = "foo";
                const body = "bar";
                const userId = 1;
                const post = await update.updatePostWithPostId(postId, title, body, userId);
                expect(post).to.have.property("id", postId);
                expect(post).to.have.property("title", title);
                expect(post).to.have.property("body", body);
                expect(post).to.have.property("userId", userId);
            });
        });

        context("PATCH request", function () {
            it("should return the title-modified post", async function () {
                const postId = 1;
                const title = "foo";
                const body = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
                const userId = 1;
                const post = await update.patchTitleOfPostWithPostId(postId, title);
                expect(post).to.have.property("id", postId);
                expect(post).to.have.property("title", title);
                expect(post).to.have.property("body", body);
                expect(post).to.have.property("userId", userId);
            });

            it("should return the body-modified post", async function () {
                const postId = 1;
                const title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
                const body = "bar";
                const userId = 1;
                const post = await update.patchBodyOfPostWithPostId(postId, body);
                expect(post).to.have.property("id", postId);
                expect(post).to.have.property("title", title);
                expect(post).to.have.property("body", body);
                expect(post).to.have.property("userId", userId);
            });

            it("should return the userId-modified post", async function () {
                const postId = 1;
                const title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
                const body = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";
                const userId = 8;
                const post = await update.patchUserIdOfPostWithPostId(postId, userId);
                expect(post).to.have.property("id", postId);
                expect(post).to.have.property("title", title);
                expect(post).to.have.property("body", body);
                expect(post).to.have.property("userId", userId);
            });
        })
    });
});
