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
function renderLicenseSection(license, name) {
  const year = new Date().getFullYear();
  const licenseLC = license.toLowerCase();
  return new Promise(function (resolve, reject) {
    xhr.open('GET', 'https://api.github.com/licenses/' + licenseLC, true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const editedResponse = xhr.responseText
          .replace(/year/g, year)
          .replace(/fullname/g, name);
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
async function generateMarkdown(data, name) {
  // renderLicenseBadge(data, name);
  // renderLicenseLink(data);
  try {
    const license = await renderLicenseSection(data, name);
    console.log(license);
    return license;
  } catch (error) {
    console.log(error);
  }
  return `# ${data.title} ${license}
`;
}

module.exports = generateMarkdown;
