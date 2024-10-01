const caesarCipher = require('./caesarCipher');

test('expects xyz 3 to be abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});