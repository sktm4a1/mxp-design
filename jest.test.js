// npx jest jest.test.js --watch
test("2+2=4", () => {
    expect(2 + 2).toBe(4);
});

test("object", () => {
    expect({ name: "mxp" }).toEqual({ name: "mxp" });
});
test("bool", () => {
    expect(3).toBeTruthy();
});
