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

  it("", ()=>{
    const word = new Word("Fred Flintstone");

    expect(word.toString()).toEqual("_ _ _ _   _ _ _ _ _ _ _ _ _ _")
  })
});
