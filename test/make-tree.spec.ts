import { makeTree } from "../";

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
    ).toMatchObject([
      {
        value: {
          key: 1,
          parentKey: null,
        },
        children: [
          {
            value: {
              key: 2,
              parentKey: 1,
            },
          },
        ],
      },
    ]);
  });
});
