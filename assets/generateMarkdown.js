const template = require('./template');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const xhr = new XMLHttpRequest();

//Queries GitHub API and callback passed to generateMarkdown
function renderLicenseSection(data) {
  const year = new Date().getFullYear();
  const licenseLC = data.license.toLowerCase();
  if (data === undefined) {
    return '';
  } else {
    return new Promise(function (resolve, reject) {
      xhr.open('GET', 'https://api.github.com/licenses/' + licenseLC, true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          const editedResponse = xhr.responseText
            .replace(/\[year\]/g, year)
            .replace(/\[fullname\]/g, data.name);
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
//Awaits response from GitHub API and creates template from information passed from inquirer and github api.
async function generateMarkdown(data) {
  const license = await renderLicenseSection(data);
  const badge = license.spdx_id.replace('-', '%20').replace('-', '--');
  const licenseBody = license.body;
  const link = license.html_url;
  return template(licenseBody, data, badge, link);
}
//Generates README.md from information generated from GitHub API/Inquirer prompts

module.exports = generateMarkdown;
