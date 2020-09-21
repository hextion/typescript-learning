import { makeTree } from "../src";

describe("makeTree", () => {
  it("should return tree", () => {
    const tree = makeTree(
      [
        { key: 1, parentKey: null },
        { key: 2, parentKey: 1 },
      ],
      {
        keySelector: (item) => item.key,
        parentKeySelector: (item) => item.parentKey,
      }
    );
    expect(tree).toMatchObject([
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
