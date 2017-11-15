var expect = require("chai").expect;
var isUserUnique = require("./isUserUnique");


describe("IsUserUnique", function() {
  it("should return false if Kendra exists in database", function() {
    expect(isUserUnique("Kendra")).be.false;
  });

  it("should return true if kendra does not exist in database", function() {
    expect(isUserUnique("kendra")).be.true;
  });

  it("should return true if ali does not exist in database", function() {
    expect(isUserUnique("ali")).be.true;
  });

  it("should return false if Billy exists in database", function() {
    expect(isUserUnique("Billy")).be.false;
  });
});
