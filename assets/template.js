const buildTemplate = (license, data, badge, link) => `
[![License](https://img.shields.io/badge/license-${badge}-${data.color})](${link})
# ${data.title}

## Description

> ${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage Information](#Usage-Information)
- [Issues](#Issues)
- [Contribute](#Contribute)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

## Installation

```
${data.install}
```

## Usage Information

${data.usage}

## Issues

${data.issues}

## Contribute

${data.contribute}

## Tests

```
${data.test}
```

## Questions?
If you have additional questions, you can reach me through GitHub or by e-mail:
* [Github](https://github.com/${data.GitHub})
* ${data.email}

## License

${license}
`;

module.exports = buildTemplate;
