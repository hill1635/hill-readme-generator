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
      section();
    });

const section = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "toc",
        message: "Enter section title, or type NEXT to continue: ",
      },
      {
        type: "input",
        name: "content",
        message: "Tell me about the section",
      },
    ])
    .then((answer) => {
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
  questions().then((answer) => {
    var content = generateMarkdown(title, sections, pictures, deployedLink);
    console.log("content: ", content);
    fileName = "readme.md";
    writeToFile(fileName, content);
  });
}

init();
