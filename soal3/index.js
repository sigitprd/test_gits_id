const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('input waktu (ex: "12:00:00 PM") \n', waktu => {
    // let newEmail = email.split('@');
    if (waktu.split(':').length == 3) {
        let newWaktu = waktu.split(' ');

        if (newWaktu[1] == "AM" && newWaktu[0].substr(0, 5) == "12:00") {
            console.log(waktu + " => 00:00");
        } else if (newWaktu[1] == "AM") {
            console.log(waktu + " => " + newWaktu[0].substr(0, 5));
        } else if (newWaktu[1] == "PM") {
            console.log(waktu + " => " + newWaktu[0].substr(0, 5));
        }
    } else {
        console.log("Waktu A tidak valid!");
    }

    readline.close();
});