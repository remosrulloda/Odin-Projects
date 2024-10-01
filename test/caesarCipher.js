function caesarCipher(str, sf) {
    let result = ''; // Initialize result correctly
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Check if character is uppercase
        if (char >= 'A' && char <= 'Z') {
            let ch = String.fromCharCode((char.charCodeAt(0) + sf - 65) % 26 + 65);
            result += ch;
        }
        // Check if character is lowercase
        else if (char >= 'a' && char <= 'z') {
            let ch = String.fromCharCode((char.charCodeAt(0) + sf - 97) % 26 + 97);
            result += ch;
        }
        // If character is not a letter, add it unchanged
        else {
            result += char;
        }
    }
    return result;
}

console.log(caesarCipher('xyz', 3)); // Output: 'abc'
module.exports = caesarCipher;
