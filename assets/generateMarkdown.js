const template = require('./template');
const fs = require('fs');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const year = new Date().getFullYear();
  const licenseLC = data.license.toLowerCase();
  return new Promise(function (resolve, reject) {
    xhr.open('GET', 'https://api.github.com/licenses/' + licenseLC, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const editedResponse = xhr.responseText
          .replace(/year/g, year)
          .replace(/fullname/g, data.name);
        const jsonParse = JSON.parse(editedResponse);
        const responseReturn = jsonParse.body;
        resolve(responseReturn);
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

// TODO: Create a function to generate markdown for README
async function generateMarkdown(data) {
  // renderLicenseBadge(data, name);
  // renderLicenseLink(data);
  try {
    const license = await renderLicenseSection(data);
    const tempData = template(license, data);
    // return tempData; can't go up a level because it results in a promise, writing file down here for
    console.log('writing data');
    fs.writeFileSync(`./${data.filename}.md`, tempData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = generateMarkdown;
