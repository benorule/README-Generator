# README-Generator

![Generated README.md file screenshot](/screenshot.jpg?raw=true "Generated README.md File Screenshot")

In creating the application I began by making two arrays: questions and answers. In the questions array I inputted all of the prompts I wanted presented to the end user in the terminal and I left the answers array empty so that later I could push the responses of the end user and store them in that array. I used a for loop that presents every question in the questions array and pushes each end user input to the answers array. Next I used createWriteStream to append all of the items in the answers array to the README file. After that I added markdown formatting along with the variables to make the README.md appear as desired.