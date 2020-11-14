// function to generate markdown for README
function generateMarkdown(data) {
  return `<h3>${data.title}</h3>
  <p>${data.summary}</p>
  <p>${data.successes}</p>
  <p>${data.challenges}</p>
  <p>${data.improvements}</p>
  <p>${data.deployedSite}</p>`;
}

module.exports = generateMarkdown;
