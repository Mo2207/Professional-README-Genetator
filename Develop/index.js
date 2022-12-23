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
      name: 'contribution',
      message: `Enter your project's contribution guidelines.`
    },
    {
      type: 'input',
      name: 'test',
      message: `Please provide test instructions for your project.`
    }
  ])
  .then((data) => {
    // console.log(data)

    const filename = 'README.md';

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
