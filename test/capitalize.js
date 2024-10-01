function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;  // Return input if it's not a string or if it's an empty string
    }
    return str[0].toUpperCase() + str.slice(1);
}
module.exports = capitalize;