var fs = require('fs');
var readline = require('readline-sync');

// array of questions for user
const questions = [
    "Enter the title of the application: ",
    "Enter the description of the application: ",
    "Enter the installation instructions for the application: ",
    "Enter the usage information for the application: ",
    "Enter the contribution guidlines for the application: ",
    "Enter the test instructions for the application: ",
];

const answers = [
];

for (i = 0; i < questions.length; i++) {
    answers.push(readline.question(questions[i]));
}

var stream = fs.createWriteStream("README.md");
stream.once('open', function (fd) {
    stream.write("# " + answers[0] + "\n");
    stream.write("## Description \n" + answers[1] + "\n");
    stream.write("## Installation Instructions \n" + answers[2] + "\n");
    stream.write("## Usage Information \n" + answers[3] + "\n");
    stream.write("## Contribution Guidelines \n" + answers[4] + "\n");
    stream.write("## Test Instructions \n" + answers[5] + "\n");
    stream.end();
});

// // function to initialize program
function init() {
}

// // function call to initialize program
init();
