const expect = require("chai").expect;

describe("Fake test", function () {

    it('should return the correct length', function () {
        const str = "hello world!";
        expect(str.length).to.equal(12);
    });
});
