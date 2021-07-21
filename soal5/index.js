const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('tulis text \n', text => {

    let re = /[\W_]/g;
    let lowRegStr = text.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');

    console.log(text + " dibalik " + (text.replace(re, '').split('').reverse().join('')) + " => " + (reverseStr === lowRegStr));

    readline.close();
});