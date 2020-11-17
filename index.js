const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
var content = '';

const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your readme?',
        },
        {
            type: 'input',
            name: 'paragraph1',
            message: 'Paragraph 1: ',
        },
        {
            type: 'input',
            name: 'paragraph2',
            message: 'Paragraph 2: ',
        },
        {
            type: 'input',
            name: 'paragraph3',
            message: 'Paragraph 3: ',
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
