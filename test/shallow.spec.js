// FIXME src -> lib
const { shallow } = require("../src/shallow");

describe("shallow", () => {
  it("should return shallow copy", () => {
    const source = { a: 1, b: [] };
    const copy = shallow(source);
    expect(copy).toMatchObject(source);
    expect(copy).not.toBe(source);
    expect(copy.b).toBe(source.b);
  });
});