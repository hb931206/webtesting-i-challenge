const { succeed, fail, repair, get } = require("./enhancer.js");

describe("enhance unit test", () => {
  describe("repair", () => {
    it("durability restored to 100", () => {
      let item = {
        name: "Computer",
        durability: 20,
        enhancement: 1,
      };
      const repairedItem = repair(item);
      expect(repairedItem.durability).toBe(100);
    });
  });
  describe("success", () => {
    it("Enhances level by 1", () => {
      let mockItem = 19;
      let item = {
        name: "Computer",
        durability: 20,
        enhancement: mockItem,
      };
      const enhancedItem = succeed(item);
      expect(enhancedItem.enhancement).toBe(mockItem + 1);
    });
  });
  describe("success", () => {
    it("Enhances level by 1", () => {
      let mockItem = 19;
      let item = {
        name: "Computer",
        durability: 20,
        enhancement: mockItem,
      };
      const enhancedItem = succeed(item);
      expect(enhancedItem.enhancement).toBe(mockItem + 1);
    });
  });
});
