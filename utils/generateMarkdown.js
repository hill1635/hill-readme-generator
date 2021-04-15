// function to generate markdown for README
const generateMarkdown = (title, sections, pictures, deployedSite) =>
  `
  # ${title}
  
  ## Table of Contents
  ${sections.map((section) => 
    ` * ${section.title}`
  ).join("\n  ")}

  ${sections.map((section) => 
    `## ${section.title}
    ${section.content}
    `
  ).join("\n  ")}

<p>Check it out <a href="${deployedSite}">here</a>.</p>`;

module.exports = generateMarkdown;
