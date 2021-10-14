// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  var badge = "";
  if (data.license === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  }
  if (data.license === "Apache") {
    badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }
  if (data.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  else {
    badge = "";
  }
  console.log(badge);
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  var link = "";
  if (data.license === "Mozilla") {
    link = "(https://opensource.org/licenses/MPL-2.0)";
  }
  if (data.license === "Apache") {
    link = "(https://opensource.org/licenses/Apache-2.0)";
  }
  if (data.license === "MIT") {
    link = "(https://opensource.org/licenses/MIT)";
  }
  else {
    link = "";
  }
  console.log(link);
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  var badge = renderLicenseBadge(data);
  var link = renderLicenseLink(data);
  licenseStamp = `${badge}${link}`;
  console.log(licenseStamp);
  return licenseStamp;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data)
  return `

# ${data.title}
  -----------------
${licenseStamp}

## Table of Contents
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Usage Guidelines](#Usage)
  - [Contribution Guidelines](#Contribution)
  - [Testing Information](#Testing)
  - [Questions](#Questions)

## Description
${data.describe}

## Installation Instructions
${data.install}

## Usage Guidelines
${data.usage}

## Contributing Guidelines
${data.contribution}

## Testing Information 
${data.testing}

## Questions
Encountering any problems? You can contact me at:
[My GitHub Page](https://github.com/${data.username})
[My Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;


// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
