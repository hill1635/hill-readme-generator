const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
var github = "";
var title = "";
var sections = [];
var pictures = [];
var deployedLink = "";

const start = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is the link to your github repo?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
      },
    ])
    .then((answer) => {
      title = answer.title;
      repo = answer.github;
      section();
    });

const section = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "section",
        message: "Enter section title, or type next to continue: ",
      },
    ])
    .then((answer) => {
      if (answer.section == "next") {
        screenshots();
      } else {
        content(answer.section);
      }
    });

const content = (title) =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "content",
        message: "Tell me about the section: ",
      },
    ])
    .then((answer) => {
      sections.push({
        title: title,
        content: answer.content,
      });
      section();
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
      if (answer.screenshots == "next") {
        link();
      } else {
        pictures.push(answer.screenshots);
        screenshots();
      }
    });

const link = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "deployedSite",
        message: "What is the link to the deployed site?",
      },
    ])
    .then((answer) => {
      var content = generateMarkdown(github, title, sections, pictures, answer.deployedSite);
      console.log(content);
      fileName = "readme.md";
      writeToFile(fileName, content);
    });

function writeToFile(fileName, content) {
  fileName = "readme.md";
  console.log(content);
  fs.writeFile(fileName, content, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

start();
