// function to generate markdown for README
const generateMarkdown = (github, repo, title, sections, pictures, deployedSite) =>
  `
  # ${title}
  [![Deployed](https://img.shields.io/static/v1?label=deployed&message=click%20here&color=success)](${deployedSite})
  [![GitHub last commit](https://img.shields.io/github/last-commit/hill1635/${repo}?color=success)](github.com/${github}/${repo}/commits/main)
  [![GitHub followers](https://img.shields.io/github/followers/hill1635?color=success&label=Follow&logo=GitHub)](github.com/${github})
  
  ## Table of Contents
  ${sections.map((section) => 
    ` * [${section.title}](${github}#${section.title.replace(" ", "-")})`
  ).join("\n  ")}

  ${sections.map((section) => 
    `## ${section.title}
    ${section.content}
    `
  ).join("\n  ")}

  ## Screenshots
  ${pictures.map((picture) =>
    `${picture}`
  ).join("\n  ")}
  `;

module.exports = generateMarkdown;
