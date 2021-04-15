// function to generate markdown for README
const generateMarkdown = (github, title, sections, pictures, deployedSite) =>
  `
  # ${title}
  ![Deployed](https://img.shields.io/static/v1?label=deployed&message=click_here&color=green&url=${deployedSite})
  
  ## Table of Contents
  ${sections.map((section) => 
    ` * [${section.title}](${github}#${section.title.replace(" ", "-")})`
  ).join("\n  ")}

  ${sections.map((section) => 
    `## ${section.title}
    ${section.content}
    `
  ).join("\n  ")}

<p>Check it out <a href="${deployedSite}">here</a>.</p>`;

module.exports = generateMarkdown;
