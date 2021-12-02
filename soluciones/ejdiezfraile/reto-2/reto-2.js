function generateTrollPassword(input) {
    input = input || ''
    const output = []

    // Zero or One char length (base case)
    if (input.length <= 1) {
        // Stop condition
        return [input]
    }

    // n char length
    // f(n) = char(i) + f(n-1) without char(i)  i < n
    for (let i = 0; i < input.length; i++) {
        const current = input.charAt(i)
        const others = removeCharAt(input, i)

        // Recursion
        generateTrollPassword(others).forEach(element => {
            output.push(current + element)
        });
    }
    return output
}

// Return a new string without the character at index position 
function removeCharAt(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

exports.generateTrollPassword = generateTrollPassword;
