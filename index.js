// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
// UPDATE QUESTIONS
const questions = [ {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
    validate: (value)=>{ if(value){return true} else {return 'input a value'}},

  }, {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    validate: (value)=>{ if(value){return true} else {return 'input a value'}},
  },{
    type: 'input',
    name: 'title',
    message: "What's your Title",
    validate: (value)=>{ if(value){return true} else {return 'input a value'}},
  },{
    type: "input",
    name: "description",
    message: "Write a brief description of your project: ",
    validate: (value)=>{ if(value){return true} else {return 'input a value'}},
},{
  type: "input",
  name: "installation",
  message: "Describe the installation process if any: ",
  validate: (value)=>{ if(value){return true} else {return 'input a value'}},
},{
  type: "input",
  name: "usage",
  message: "What is this project usage for?",
  validate: (value)=>{ if(value){return true} else {return 'input a value'}},
},
{
  type: "list",
  name: "license",
  message: "Chose the appropriate license for this project: ",
  choices: [
      "Apache",
      "Academic",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "Open"
  ]
},
  {
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?",
    validate: (value)=>{ if(value){return true} else {return 'input a value'}},
},{
  type: "input",
  name: "tests",
  message: "Is there a test included?",
  validate: (value)=>{ if(value){return true} else {return 'input a value'}},
},{
  type: "input",
  name: "questions",
  message: "What do I do if I have an issue? ",
  validate: (value)=>{ if(value){return true} else {return 'input a value'}},
}
];

// TODO: Create a function to write README file



function writeToFile(fileName, data) {
   
  const info = generateMarkdown(data);


  
  fs.writeFileSync(fileName, info)

}




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
.then((answers) => {

    writeToFile('README.md', answers) 
 
  })    
} 



// Function call to initialize app
init();
