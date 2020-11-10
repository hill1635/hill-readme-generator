const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () => {
 return inquirer.prompt([
     {
     type: 'input',
     name: 'title',
     message: 'What is the title of your readme?',
     },
     {
     type: 'input',
     name: 'summary',
     message: 'What was the required assignment?',
     },
     {
     type: 'input',
     name: 'successes',
     message: 'What were your successes?',
     },
     {
     type: 'input',
     name: 'challenges',
     message: 'What challenges did you face?',
     },
     {
     type: 'input',
     name: 'improvements',
     message: 'What could be added or improved upon?',
     },
     {
     type: 'input',
     name: 'deployedSite',
     message: 'What is the link to the deployed site?',
     },
//Add question for screenshots?
//Need if statement for Y/N question to repeat until user selects no.
    //  {
    //  type: 'yes/no',
    //  name: 'screenshotCheck',
    //  message: 'Do you have any additional screenshots?',
    //  },
    //  {
    //  type: 'input',
    //  name: 'screenshotInput',
    //  message: 'Please enter image info here:',
    //  },
]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
