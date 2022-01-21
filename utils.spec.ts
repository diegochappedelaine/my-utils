describe("appendQueryParamsToURL", () => {
  it("should append first query param with a question mark", () => {
    const url = appendQueryParamsToURL("http://www.test.com", { foo: "bar" });
    expect(url).toEqual("http://www.test.com/?foo=bar");
  });
  it("should only add a query param if url already has a question mark", () => {
    const url = appendQueryParamsToURL("http://www.test.com/?", { foo: "bar" });
    expect(url).toEqual("http://www.test.com/?foo=bar");
  });
  it("should return provided url if params are empty", () => {
    const url = appendQueryParamsToURL("http://www.test.com/", {});
    expect(url).toEqual("http://www.test.com/");
  });
  it("should add params to existing one", () => {
    const url = appendQueryParamsToURL("http://www.test.com/?foo=bar", {
      baz: "qux",
      test: "dummy",
    });
    expect(url).toEqual("http://www.test.com/?foo=bar&baz=qux&test=dummy");
  });
  it("sould replace existing param if key is the same", () => {
    const url = appendQueryParamsToURL("http://www.test.com/?foo=bar", {
      foo: "test",
    });
    expect(url).toEqual("http://www.test.com/?foo=test");
  });
});
