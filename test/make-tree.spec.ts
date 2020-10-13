import { makeTree } from "../src";

describe("makeTree", () => {
  it("should return tree", () => {
    const tree = makeTree(
      [
        { key: 1, parentKey: null },
        { key: 2, parentKey: 1 },
      ],
      {
        nodeKeySelector: (item) => item.key,
        parentNodeKeySelector: (item) => item.parentKey,
      },
      null
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
