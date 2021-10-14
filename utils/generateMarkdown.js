// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  var badge = "";
  if (data.license === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  }
  else if (data.license === "Apache") {
    badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }
  else if (data.license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  else {
    badge = "";
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  var link = "";
  if (data.license === "Mozilla") {
    link = "(https://opensource.org/licenses/MPL-2.0)";
  }
  else if (data.license === "Apache") {
    link = "(https://opensource.org/licenses/Apache-2.0)";
  }
  else if (data.license === "MIT") {
    link = "(https://opensource.org/licenses/MIT)";
  }
  else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  var badge = renderLicenseBadge(data);
  var link = renderLicenseLink(data);
  var licenseStamp = `${badge}${link}`;
  return licenseStamp;
}

// Made with tech list
function technologies(data) {
  var techList = data.tech;
  var renderTech = [];
  for (let i = 0; i < techList.length; i++) {
    if (techList[i] === "HTML") {
      renderTech.push("* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)")
    }
    if (techList[i] === "CSS") {
      renderTech.push("* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)")
    }
    if (techList[i] === "JavaScript") {
      renderTech.push("* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)")
    }
    if (techList[i] === "jQuery") {
      renderTech.push("* [jQuery](https://api.jquery.com/)")
    }
    if (techList[i] === "Node.js") {
      renderTech.push("* [Node.js](https://nodejs.org/en/)")
    }
  }
  return renderTech;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var addLicense = renderLicenseSection(data);
  var addTech = technologies(data);
  var addTech = addTech.join("\n");

  return `

# ${data.title}
  -----------------
${addLicense}

## Table of Contents
  - [Description](#Description)
  - [Installation Instructions](#Installation)
  - [Built With](#Built)
  - [Usage Guidelines](#Usage)
  - [Contribution Guidelines](#Contribution)
  - [Testing Information](#Testing)
  - [Questions](#Questions)

## Description
${data.describe}

[Click this link to see ${data.repo} in action](https://${data.username}.github.io/${data.repo}/)
 <br />

**Demo of ${data.repo} in action!**

![Demo of ${data.repo} in action](./images/${data.repo}-demo.gif)

## Installation Instructions
${data.install}

## Built With
${addTech}

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
