const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('tulis text \n', text => {
    let result = reverseString(text);

    console.log(text + " = " + result);

    readline.close();
});

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}