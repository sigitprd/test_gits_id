const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Mau angka berapa? \n', angka => {
    angka = parseInt(angka);
    if (typeof angka == "number") {
        if (angka % 3 == 0 && angka % 5 == 0) {
            console.log("Hello World");
        } else if (angka % 3 == 0) {
            console.log("Hello");
        } else if (angka % 5 == 0) {
            console.log("World");
        }
    } else {
        console.log("bukan angka :(");
    }
    readline.close();
});