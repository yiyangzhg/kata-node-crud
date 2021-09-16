const expect = require("chai").expect;
const update = require("../update");

describe("Update operation", function () {

    context("Posts resources", function () {
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
});
