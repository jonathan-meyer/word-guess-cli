const App = require("../App");

describe("App", () => {
  it("should instantiate with no errors", () => {
    expect(new App()).toEqual(expect.any(App));
    expect(App()).toEqual(expect.any(App));
  });
});
