const inquirer = require('inquirer');
const fs = require('fs');
// const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');
//Utils not defined?  Look up writeFileAsync
const writeFileAsync = utils.promisify(fs.writeFile);

// array of questions for user
const questions = () => {
    //return removed before inquirer
    inquirer
        .prompt([
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
        ])
    // .then((data) => {
    //     const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;

    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //         err ? console.log(err) : console.log('Success!')
    //     );
    // });
}

// function to write README file
// fileName? Code breaks here.
const writeToFile = (fileName, generateMarkdown) => {
    // generateMarkdown();
    fileName = 'readme.md';
    // `<h3>${data.title}</h3>
    // <p>${data.summary}</p>
    // <p>${data.successes}</p>
    // <p>${data.challenges}</p>
    // <p>${data.improvements}</p>
    // <p>${data.deployedSite}</p>`
    fs.writeFile(fileName, JSON.stringify(generateMarkdown, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
const init = async () => {
    try {
        const answers = await questions();

        const md = writeToFile(answers);

        await writeFileAsync('readme.md', md);

        console.log("You freaking did it!");
    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();
