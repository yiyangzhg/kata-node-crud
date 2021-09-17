const expect = require("chai").expect;
const del = require("../services/delete");

describe("Delete operation", function () {

    context("Posts resources", function () {
        it("should return 200", async function () {
            const postId = 42;
            const response = await del.deletePostWithPostId(postId);
            expect(response).to.have.property("status", 200);
        });
    });
});
