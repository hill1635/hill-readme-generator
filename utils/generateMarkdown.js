// function to generate markdown for README
const generateMarkdown = (github, title, sections, pictures, deployedSite) =>
  `
  # ${title}
  [![Deployed](https://img.shields.io/static/v1?label=deployed&message=click%20here&color=success)](${deployedSite})
  [![GitHub last commit](https://img.shields.io/github/last-commit/hill1635/${github}?color=success)](${github}/commits/main)
  
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
