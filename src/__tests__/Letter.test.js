const Letter = require("../Letter");

describe("Letter", () => {
  it("should instantiate with no errors", () => {
    expect(new Letter("A")).toEqual(expect.any(Letter));
    expect(Letter("A")).toEqual(expect.any(Letter));
  });

  it("should throw an error when a `character` is not given", () => {
    expect(() => {
      new Letter();
    }).toThrow();
  });

  it("should return its value when visible", () => {
    const letter = new Letter("a");
    letter.isVisible = true;
    expect(letter.toString()).toMatch("a");
  });

  it("should return `_` when not visible and character is not whitespace", () => {
    const letter = new Letter("a");
    letter.isVisible = false;
    expect(letter.toString()).toMatch("_");

    const number = new Letter("0");
    letter.isVisible = false;
    expect(letter.toString()).toMatch("_");
  });

  it("should return its value when not visible and character is whitespace", () => {
    const letter = new Letter(" ");
    letter.isVisible = false;
    expect(letter.toString()).toMatch(/^\s$/);

    const number = new Letter("\t");
    letter.isVisible = false;
    expect(letter.toString()).toMatch(/^\s$/);
  });
});
