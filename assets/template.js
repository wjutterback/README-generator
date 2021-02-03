const buildTemplate = (license, data) => `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Instructions](#Instructions)
- [Issues](#Issues)
- [Contribute](#Contribute)
- [License](#license)

## Installation

${data.install}

## Instructions

${data.test}

## Issues

${data.issues}

## Contribute

${data.contribute}

## License

${license}
`;

module.exports = buildTemplate;
