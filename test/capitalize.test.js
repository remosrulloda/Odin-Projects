const capitalize = require('./capitalize');

test('capitalizes first letter of the string', () => {
    expect(capitalize('test')).toBe('Test');
});