const expect = require("chai").expect;
const create = require("../create");

describe("Create operation", function () {

    context("Posts resources", function () {
        it("should return the newly created post", async function () {
            const title = "foo";
            const body = "bar";
            const userId = 1;
            const post = await create.createPost(title, body, userId);
            expect(post).to.have.property("id", 101);
            expect(post).to.have.property("title", title);
            expect(post).to.have.property("body", body);
            expect(post).to.have.property("userId", userId);
        });
    });
});
