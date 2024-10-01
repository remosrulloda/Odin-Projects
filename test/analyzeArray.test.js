const analyzeArray = require('./analyzeArray');

const obj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
};

test('expects to return the correct average, min, max, and length vals', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe(obj);
});