const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
var title = "";
var sections = [];
var pictures = [];
var deployedLink = "";

const start = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
    ])
    .then((answer) => {
      title = answer.title;
      section();
    });

const section = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "section",
        message: "Enter section title, or type NEXT to continue: ",
      },
      {
        type: "input",
        name: "content",
        message: "Tell me about the section",
      },
    ])
    .then((answer) => {
        sections.push({
            title: answer.section,
            content: answer.content,
        });
      screenshots();
    });

const screenshots = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "screenshots",
        message: "Add screenshot elements here, or type NEXT to continue: ",
      },
    ])
    .then((answer) => {
      link();
    });

const link = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "deployedSite",
      message: "What is the link to the deployed site?",
    },
  ]);

function writeToFile(fileName, content) {
  fileName = "readme.md";
  console.log(content);
  fs.writeFile(fileName, content, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
  start().then(() => {
    var content = generateMarkdown(title, sections, pictures, deployedLink);
    console.log(content);
    fileName = "readme.md";
    writeToFile(fileName, content);
  });
}

init();
