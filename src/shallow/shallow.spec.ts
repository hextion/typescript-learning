import { shallow } from "./shallow";

describe("shallow", () => {
  it("should return shallow copy", () => {
    const source = { a: 1, b: [] };
    const copy = shallow(source);
    expect(copy).toMatchObject(source);
    expect(copy).not.toBe(source);
    expect(source.b).toBe(copy.b);
  });
});
