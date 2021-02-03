const buildTemplate = (license, data, badge, link) => `
[![License](https://img.shields.io/badge/license-${badge}-${data.color})](${link})
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#Installation)
- [Instructions](#Instructions)
- [Issues](#Issues)
- [Contribute](#Contribute)
- [Questions](#Questions)
- [License](#License)

## Installation

${data.install}

## Instructions

${data.test}

## Issues

${data.issues}

## Contribute

${data.contribute}

## Questions?
If you have additional questions, you can reach me either at the GitHub Profile below:
[Github Profile](https://github.com/${data.GitHub})
or by e-mailing:
${data.email}

## License

${license}
`;

module.exports = buildTemplate;
