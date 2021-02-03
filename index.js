const inquirer = require('inquirer');
const generate = require('./assets/generateMarkdown'); // generate will run generateMarkdown function
const colorChoices = ['green', 'blue', 'lightblue', 'red', 'orange'];
const licenseChoices = [
  'MIT',
  'GPL-2.0',
  'Apache-2.0',
  'GPL-3.0',
  'BSD-3-clause',
  'Unlicense',
  'LGPL-3.0',
  'AGPL-3.0',
  'MPL-2.0',
  'BSL-1.0',
];
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your full name?',
  },
  {
    type: 'input',
    name: 'filename',
    message: 'What do you want to name your README file?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project:',
  },
  {
    type: 'input',
    name: 'install',
    message: 'How do you install it?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What usage instructions do you want to provide?',
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
    type: 'list',
    name: 'color',
    message: 'Which color would you like your license badge to be?',
    choices: colorChoices,
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

// Potentially chain .thens to be able to writeSyncFunction in index.js
//https://stackoverflow.com/questions/28250680/how-do-i-access-previous-promise-results-in-a-then-chain
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      generate(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
// Function call to initialize app
init();
