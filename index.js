const inquirer = require('inquirer');
const generate = require('./assets/generateMarkdown');
const questions = require('./assets/questions');
const fs = require('fs');

//Generates README.md from information generated from GitHub API/Inquirer prompts
function writeToFile(fileName, data) {
  console.log('Writing file now');
  fs.writeFileSync(`./${fileName}.md`, data);
}

//Run inquirer prompts, passes information to generateMarkdown, and writes info returned from generate.
function init() {
  inquirer
    .prompt(questions)
    .then(async (data) => {
      const template = await generate(data);
      writeToFile(data.filename, template);
    })
    .catch((error) => {
      console.log(error);
    });
}
// Function call to initialize app
init();
