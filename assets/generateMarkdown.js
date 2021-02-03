const template = require('./template');
const fs = require('fs');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();

//Queries GitHub API and callback passed to generateMarkdown
function renderLicenseSection(data) {
  const year = new Date().getFullYear();
  const licenseLC = data.license.toLowerCase();
  if (data === !null) {
    return '';
  } else {
    return new Promise(function (resolve, reject) {
      xhr.open('GET', 'https://api.github.com/licenses/' + licenseLC, true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const editedResponse = xhr.responseText
            .replace(/year/g, year)
            .replace(/fullname/g, data.name);
          const jsonParse = JSON.parse(editedResponse);
          resolve(jsonParse);
        } else {
          reject(console.error('reject', xhr.statusText));
        }
      };
      xhr.onerror = function () {
        console.error(xhr.statusText);
      };
      xhr.send();
    });
  }
}
//Awaits response from GitHub API and runs writeToFile with information gathered.
async function generateMarkdown(data) {
  const license = await renderLicenseSection(data);
  const badge = license.spdx_id.replace('-', '%20').replace('-', '--');
  const licenseBody = license.body;
  const link = license.html_url;
  const tempData = template(licenseBody, data, badge, link);
  console.log('writing data');
  writeToFile(data.filename, tempData);
}
//Generates README.md from information generated from GitHub API/Inquirer prompts
function writeToFile(fileName, data) {
  console.log('writing file');
  fs.writeFileSync(`./${fileName}.md`, data);
}

module.exports = generateMarkdown;
