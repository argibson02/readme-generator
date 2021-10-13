// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if ({license} === "Mozilla") {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  }
  if ({license} === "Apache") {
    badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  }
  if ({license} === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  else {
    badge = "";
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var link = "";
  if ({license} === "Mozilla") {
    link = "(https://opensource.org/licenses/MPL-2.0)";
  }
  if ({license} === "Apache") {
    link = "(https://opensource.org/licenses/Apache-2.0)";
  }
  if ({license} === "MIT") {
    link = "(https://opensource.org/licenses/MIT)";
  }
  else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge();
  renderLicenseLink();
  var licenseStamp = `${badge} ${link}`;
  return licenseStamp;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${licenseStamp}
  # ${data.title}
  ${data.describe}
  ${data.install}
  ${data.usage}
  ${data.contribution}
  ${data.testing}
  ${data.license}
  ${data.username}
  ${data.email}

`;
}

module.exports = generateMarkdown;


// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
