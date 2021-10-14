// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like to title your project?" // title (1)
    }
    ,
    {
        type: "input",
        name: "describe",
        message: "How would you describe your project?" // describe (2)
    }
    ,
    {
        type: "input",
        name: "install",
        message: "Are there any installation instructions for your project?" // install (2)
    }
    ,
    {
        type: "input",
        name: "usage",
        message: "Is there any usage information for your project?" // install (2)
    }
    ,
    {
        type: "input",
        name: "contribution",
        message: "Are there any contribution guidelines for your project?" // describe (2)
    }
    ,
    {
        type: "input",
        name: "testing",
        message: "Are there any testing instructions for your project?" // testing (2)
    }
    ,
    {
        type: "list",
        name: "license",
        message: "Which license type would you like to use?", // License (3)
        choices: ["MIT", "Mozilla", "Apache", "No License"],
    }
    ,
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? This information will be added to the contact section of the README." // testing (4)
    }
    ,
    {
        type: "input",
        name: "email",
        message: "What is your email address? This information will be added to the contact section of the README." // testing (5)
    }
    ,

];




// TODO: Create a function to write README file
// function writeFile("README.md", JSON.stringify(), (error) => 
//     error ? console.error(error) : console.log("Your README file has been created! Please check you local files.")

// );



// function writeFile(fileName, data, ) {
    
//     renderLicenseSection(data.license);
//     generateMarkdown(data);

// }






function init() {
inquirer
    .prompt(questions)
    .then((response) => {
       let makeReadMe = generateMarkdown(response);
        fs.writeFile("sampleREADME.md", makeReadMe, (err) => {
            err ? console.error(err) : console.log('Success! Please check you local files for the new README.md')
        })
        console.log(response);
    })
}



// TODO: Create a function to initialize app
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((response) => {
//             console.log(response);
//             generateMarkdown(response);
//         }

//         )};

// Function call to initialize app
init();

