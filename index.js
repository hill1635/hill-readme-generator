const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
var content = '';

const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'toc',
            message: 'Enter section title, or type NEXT to continue: ',
        },
        {
            type: 'input',
            name: 'content',
            message: 'Tell me about the section',
        },
        {
            type: 'input',
            name: 'screenshots',
            message: 'Add screenshot elements here, or type NEXT to continue: ',
        },
        {
            type: 'input',
            name: 'deployedSite',
            message: 'What is the link to the deployed site?',
        },
    ]);

function writeToFile(fileName, content) {
    fileName = 'readme.md';
    console.log(content);
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
};

function init() {
    questions()
    .then((answer) => {
        content = generateMarkdown(answer);
        console.log("content: ", content);
        fileName = 'readme.md';
        writeToFile(fileName, content);
    });
}

init();
