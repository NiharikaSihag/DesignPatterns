test('test the sum fn ', () => {
    const a = 45;
    const b = 65;

    const result = sum(a,b);

    expect(result).toBe(54);
})