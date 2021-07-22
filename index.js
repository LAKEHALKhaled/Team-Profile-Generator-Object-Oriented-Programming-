const inquirer = require("inquirer");
const fs = require("fs");
const generateFile = require("./src/generateFile")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Initialize a new Game object

const Team = []
const questions = [ {
    type: 'input',
    name: 'name',
    message: 'What is the team managers name?'
  },
  {
      type: 'input',
      name: 'id',
      message: 'What is the team managers id?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team managers email?'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the team managers office number?'
    }
  ]
const questionsForintern = [ {
  type: 'input',
  name: 'name',
  message: 'What is the Intern name?'
},
{
    type: 'input',
    name: 'id',
    message: 'What is the Intern id?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Intern email?'
  },
  {
    type: 'input',
    name: 'School',
    message: 'What is the Intern School name?'
  },
]

  const questionsForEngineer = [ {
    type: 'input',
    name: 'name',
    message: 'What is the Engineer name?'
  },
  {
      type: 'input',
      name: 'id',
      message: 'What is the Engineer id?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineer email?'
    },
    {
      type: 'input',
      name: 'GitHub',
      message: 'What is the Engineer GitHub?'
    },
  ]
  function EngineerQuestions(){
    inquirer.prompt(questionsForEngineer).then((answers) => {
      const engineer = new Engineer(answers.name,answers.id,answers.email,answers.GitHub)
      Team.push(engineer)
      chooseMembers()
    }) 
  }
  function InternQuestions(){
    inquirer.prompt(questionsForintern).then((answers) => {
      const intern = new Intern(answers.name,answers.id,answers.email,answers.School)
      Team.push(intern)
      chooseMembers()
    }) 
  }
  function createFile(){
      const indexFile = generateFile(Team)
      fs.writeFile("index.html", indexFile, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    
  }

  function chooseMembers() {
       inquirer.prompt({
        type: 'list',
        message: 'which type of team member would you like to add?',
        name: 'stack',
        choices: ['Engineer', 'Intern', 'Team is complete, no need for additional members']
      }).then( (answers) => {
            if(answers.stack == 'Engineer'){
              EngineerQuestions()
            }else if (answers.stack =='Intern'){
              InternQuestions()
            }else{
              console.log("Your Team is created :")
              console.log(JSON.stringify(Team));
               createFile()
              
            }
        
    })
  
  }
const  init = () => {
    inquirer.prompt(questions).then( (answers) => {
        
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
        console.log(manager);
        Team.push(manager)
        console.log(Team);
        chooseMembers()

    //   const READMEPage = generateMarkdown(answers)
    //   fs.writeFile("README.md", READMEPage, (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
    })
    
}
init();


