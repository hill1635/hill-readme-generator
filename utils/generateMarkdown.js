// function to generate markdown for README
const generateMarkdown = (answer) =>
  `
  <h1>${answer.title}</h1>
  <p>${answer.summary}</p>
  <p>${answer.successes}</p>
  <p>${answer.challenges}</p>
  <p>${answer.improvements}</p>
  <p>${answer.deployedSite}</p>
  `;

module.exports = generateMarkdown;
