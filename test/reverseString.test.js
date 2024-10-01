const reverseString = require('./reverseString');

test('expects abcd to be dcba', () => {
    expect(reverseString('abcd')).toBe('dcba');
});