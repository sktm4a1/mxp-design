test("2+2=4",() => {
	expect(2+2).toBe(4);
})

test ("test object",() => {
	expect({name:"mxp"}).toEqual({name:"mxp"})
})
test('test bool',() => {
	expect(3).toBeTruthy()
})