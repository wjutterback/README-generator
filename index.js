// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./assets/generateMarkdown'); // generate will run generateMarkdown function

// TODO: Create an array of questions for user input
const licenseChoices = ['MIT', 'GPLv2', 'Apache', 'BSD 3-clause'];
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project',
  },
  {
    type: 'input',
    name: 'install',
    message: 'How do you install it?',
  },
  {
    type: 'input',
    name: 'issues',
    message: 'How do you report issues?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How would you like others to contribue?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What test instructions do you want to provide?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: licenseChoices,
  },
  {
    type: 'input',
    name: 'GitHub',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
