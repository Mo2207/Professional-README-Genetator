// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: `Please give a description for your project.`
    },
    {
      type: 'input',
      name: 'installation',
      message: `Please provide installation instructions required for your project.`
    },
    {
      type: 'input',
      name: 'usage',
      message: `Enter any relevant usage information for your project.`
    },
    {
      type: 'input',
      name: 'contributions',
      message: `Enter your project's contribution guidelines.`
    },
    {
      type: 'input',
      name: 'test',
      message: `Please provide test instructions for your project.`
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github username.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for your project:',
      choices: [
        'MIT',
        'GPLv2',
        'GPLv3',
        'Apache',
        'Mozilla',
        'BSD3Clause'
      ]
    }
  ])
  .then((data) => {
    // console.log(data)

    // filename will always be README.md
    const filename = 'README.md';

    // List of Licenses to choose from
    const licenses = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      GPLv2: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
      BSD3Clause: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' 
    }

    // Selects the users chosen license
    let chosenLicense = data.license

    // Assigns the chosen license a badge from licenses
    let setBadge = licenses[chosenLicense];

    // Write to the file in Markdown format
    const fileContent = 
`# ${data.title.toUpperCase()} ${setBadge}

## Description: 
${data.description}

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)
[License](#license)

## Installation:
${data.installation}
    
## Usage:
${data.usage}
    
## Contributing:
${data.contributions}
    
## Tests:
${data.test}

## Questions
My Github username is ${data.github}, here is a link to my profile if you want to check out more of my work: 
https://github.com/${data.github}

If you have any questions about this application, you can contact me via email: 
[Contact me](mailto:${data.email})

## License:
This application is covered under the ${data.license} license`

    fs.writeFile(filename, fileContent, (err) =>
      err ? console.log(err) : console.log('README created!')
    );
  })
  