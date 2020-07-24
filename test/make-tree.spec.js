// FIXME src -> lib
const { makeTree } = require("../src");

describe("makeTree", () => {
  it("should return tree", () => {
    expect(
      makeTree(
        [
          { key: 1, parentKey: null },
          { key: 2, parentKey: 1 },
        ],
        {
          keySelector(item) {
            return item.key;
          },
          parentKeySelector(item) {
            return item.parentKey;
          },
        }
      )
    ).toDeepEqual([
      {
        key: 1,
        parentKey: null,
        children: [
          {
            key: 2,
            parentKey: 1,
            children: null,
          },
        ],
      },
    ]);
  });
});
