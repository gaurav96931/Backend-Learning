import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            type: "input",
            name: "url",
            message: "Drop the URL here: ",
        },
    ])
    .then((answers) => {
        const url = answers.url;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("QR.png"));
        console.log("QR generated");
        fs.writeFile("QR-link.txt", url, function (err) {
            if (err) throw err;
            console.log("File saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
