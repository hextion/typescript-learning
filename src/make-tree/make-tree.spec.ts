import { makeTree } from "./make-tree";

interface Node {
  key: string | number;
  parentKey: string | number | null;
}

describe("makeTree", () => {
  it("should return tree", () => {
    expect(
      makeTree<Node>(
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
