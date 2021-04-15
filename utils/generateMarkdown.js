// function to generate markdown for README
const generateMarkdown = (github, title, sections, pictures, deployedSite) =>
  `
  # ${title}
  [![Deployed](https://img.shields.io/static/v1?label=deployed&message=click_here&color=green)](${deployedSite})
  
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
