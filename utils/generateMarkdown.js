
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
  return `# ${data.title}
  






## Description
${data.description}



## Table of Contents (Optional)


* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [License](#license)
* [Test](#test)
* [Questions](#questions)

## Installation
${data.installation}


## Usage
${data.usage}



## Contribution
${data.contributing}



## License
${data.license}


---


## Tests
${data.tests}









## Questions

${data.questions}



${data.first_name} ${data.last_name}


`;
}

module.exports = generateMarkdown;
