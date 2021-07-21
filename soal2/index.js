const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('input email anda ? \n', email => {
    let newEmail = email.split('@');

    if (email.includes('@') && newEmail[1].charAt(0) == '.' && newEmail[0].length <= 20 && (email.includes('.co.id') || email.includes('.id'))) {
        console.log('email valid!');
    } else {
        console.log('email tidak valid!');
    }

    readline.close();
});