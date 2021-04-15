
  # README Generator
  [![Deployed](https://img.shields.io/static/v1?label=deployed&message=click%20here&color=success)](https://www.youtube.com/watch?v=RIhJDQYRpAc)
  [![GitHub last commit](https://img.shields.io/github/last-commit/hill1635/hill-readme-generator?color=success)](github.com/hill1635/hill-readme-generator/commits/main)
  [![GitHub followers](https://img.shields.io/github/followers/hill1635?color=success&label=Follow&logo=GitHub)](github.com/hill1635)
  
  ## Table of Contents
   * [Purpose](hill1635#Purpose)
   * [Challenges](hill1635#Challenges)
   * [Future Developments](hill1635#Future-Developments)

  ## Purpose
  For this week's homework assignment, we created a readme generator using node.js and inquirer. First, questions were created with inquirer.prompt using type, name, and message properties. Since this was for a readme, the type was input for all questions and I used one for title, paragraph 1, 2, and 3, and then finally a question asking for a link to the deployed site. Initially I started with questions about successes, challenges and what could be improved upon, but when thinking about writing my own readme, it made more sense to just do paragraph 1, 2, and 3 as I usually cover those in all paragraphs.
    
  ## Challenges
  Now came the hard part - using npms and node to make it work. It took a lot of trial and error figuring out what to put in the writeToFile function and then what went into the init function to initialize the readme. After installing the JSON package and fs, I was able to get the questions to pop up, but the readme saved as "undefined" and the console.logs were doing some funky things such as inputting the console.log message into the questions. More trial and error later, I realized the fs.writeFile, shockingly, wrote the actual file, so it was added to the writeToFile function. Now the questions didn't show up, so that function was added to writeToFile, but still returned "undefined" content. Finally, a lightbulb went off into the wee hours of Satuday night and I realized init needed the questions function, followed by .thenn which called generateMarkdown. I created an empty global content variable which was updated with the generateMarkdown function. The fileName variable was pretty simple as all of my readmes have been titled readme.md. Finally, writeToFile was called using fileName and content parameters and PRESTO! A functional readme was created.
    
  ## Future Developments
  In the future, I would like to integrate a frontend aspect to the readme generator. Ideally this would be hosted on a website where the UI is a lot easier to navigate and have it spit out a file into whatever folder the user chooses locally. More Shields IO badge integration options as well.
    

  ## Screenshots
  
  