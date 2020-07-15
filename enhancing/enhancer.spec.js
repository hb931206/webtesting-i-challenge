const { succeed, fail, repair, get } = require("./enhancer.js");

describe("enhance unit test", () => {
  describe("repair", () => {
    it("durability restored to 100", () => {
      const item = {
        name: "Computer",
        durability: 20,
        enhancement: 1,
      };
      const repairedItem = repair(item);
      expect(repairedItem.durability).toBe(100);
    });
  });
});
