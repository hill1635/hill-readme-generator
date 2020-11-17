// function to generate markdown for README
const generateMarkdown = (answer) =>
  `
  <h1>${answer.title}</h1>
  <p>${answer.paragraph1}</p>
  <p>${answer.paragraph2}</p>
  <p>${answer.paragraph3}</p>
  <p>Check it out <a href="${answer.deployedSite}">here</a>.</p>
  `;

module.exports = generateMarkdown;
