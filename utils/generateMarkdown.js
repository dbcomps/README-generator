// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
	let license = data.license;
	
	switch (license) {
		case 'Apache 2.0':
			badgeLink = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
			break;
		case 'BSD 3':
			badgeLink = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
			break;
		case 'BSD 2':
			badgeLink = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
			break;
		case 'GPL v3':
			badgeLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
			break;
		case 'GPL v2':
			badgeLink = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
			break;
		case 'IBM':
			badgeLink = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
			break;
		case 'MIT':
			badgeLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
			break;
		case 'Mozilla':
			badgeLink = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
			break;
	}
};

// console.log(answers)
// const licenseBadge = renderLicenseBadge(data.license);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

const licenseBadge = renderLicenseBadge(data.license);

  return `${badgeLink}
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)

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
`;
}

module.exports = {generateMarkdown, renderLicenseBadge};