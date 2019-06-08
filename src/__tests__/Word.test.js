const Word = require("../Word");

describe("Word", () => {
  it("should instantiate with no errors", () => {
    expect(new Word("")).toEqual(expect.any(Word));
    expect(Word("")).toEqual(expect.any(Word));
  });

  it("should throw an error when a `word` is not given", () => {
    expect(() => {
      new Word();
    }).toThrow();
  });

  it("should not show a new word", () => {
    const word = new Word("Fred Flintstone");
    expect(word.toString()).toEqual("_ _ _ _   _ _ _ _ _ _ _ _ _ _");
  });

  it("should only show letters that are revealed", () => {
    const word = new Word("Fred Flintstone");

    word.reveal("f");
    expect(word.toString()).toEqual("F _ _ _   F _ _ _ _ _ _ _ _ _");

    word.reveal("l");
    expect(word.toString()).toEqual("F _ _ _   F l _ _ _ _ _ _ _ _");

    word.reveal("z");
    expect(word.toString()).toEqual("F _ _ _   F l _ _ _ _ _ _ _ _");
  });

  it("should be solved if all letters are revealed", () => {
    const word = new Word("cat");

    word.reveal("c");
    expect(word.isSolved).toBeFalsy();

    word.reveal("a");
    expect(word.isSolved).toBeFalsy();

    word.reveal("t");
    expect(word.isSolved).toBeTruthy();
  });
});
