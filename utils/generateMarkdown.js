// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${data.license}
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)

## Installation
${data.installInstructions}

## Usage
${data.useCase}

## License
${data.license}

## Credits
${data.contributors}

## Tests
${data.tests}

## Questions
If you have any questions about this project you can reach me at ${data.email}

See any of my other projects on GitHub at github.com/${data.githubUser}

`;
}

module.exports = generateMarkdown;
