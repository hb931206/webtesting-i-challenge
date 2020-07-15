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
    it("keeps enhancement lvl at 20", () => {
      let mockItem = 20;
      let item = {
        name: "Computer",
        durability: 20,
        enhancement: mockItem,
      };
      const enhancedItem = succeed(item);
      expect(enhancedItem.enhancement).toBe(20);
    });
  });
  describe("fails", () => {
    it("Enhancement lvl <15", () => {
      let mockDurability = 10;
      let mockEnhance = 12;
      let item = {
        name: "Computer Screen",
        durability: mockDurability,
        enhancement: mockEnhance,
      };
      const enhanceFailure = fail(item);
      expect(enhanceFailure.durability).toBe(mockDurability - 5);
    });
    it("Enhancement lvl >15", () => {
      let mockDurability = 10;
      let mockEnhance = 15;
      let item = {
        name: "Computer",
        durability: mockDurability,
        enhancement: mockEnhance,
      };
      const enhanceFailure = fail(item);
      expect(enhanceFailure.durability).toBe(mockDurability - 10);
    });
    it("Enhancement lvl >16", () => {
      let mockDurability = 10;
      let mockEnhance = 17;
      let item = {
        name: "Computer",
        durability: mockDurability,
        enhancement: mockEnhance,
      };
      const enhanceFailure = fail(item);
      expect(enhanceFailure.durability).toBe(mockDurability - 10);
      expect(enhanceFailure.enhancement).toBe(mockEnhance - 1);
    });
  });
});
