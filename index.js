const inquirer = require("inquirer");
const fs = require("fs").promises;
const generatePage = require("./src/generatePage.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeArray = [];

const init = () => {
  inquirer
    .prompt([
      {
        name: "position",
        type: "list",
        message: "What position would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((result) => {
      if (result.position === "Manager") {
        inquirer
          .prompt([
            {
              name: "managerName",
              type: "input",
              message: "What is the manager's name?",
            },
            {
              name: "managerId",
              type: "input",
              message: "What is the manager's ID?",
            },
            {
              name: "managerEmail",
              type: "input",
              message: "What is the manager's email?",
            },
            {
              name: "managerNumber",
              type: "input",
              message: "What is the manager's office number?",
            },
          ])
          .then((managerResult) => {
            const newManager = new Manager(
              managerResult.managerName,
              managerResult.managerId,
              managerResult.managerEmail,
              managerResult.managerNumber
            );
            employeeArray.push(newManager);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Done adding members to the team?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  const employeeCards = generatePage(employeeArray);
                  fs.writeFile(`./dist/team.html`, employeeCards, (err) =>
                    err
                      ? console.log("Failed to generate.")
                      : console.log("Success")
                  );
                } else {
                  init();
                }
              });
          });
      } else if (result.position === "Engineer") {
        inquirer
          .prompt([
            {
              name: "engineerName",
              type: "input",
              message: "What is the engineer's name?",
            },
            {
              name: "engineerId",
              type: "input",
              message: "What is the engineer's ID?",
            },
            {
              name: "engineerEmail",
              type: "input",
              message: "What is the engineer's email?",
            },
            {
              name: "engineerGithub",
              type: "input",
              message: "What is the engineer's github?",
            },
          ])
          .then((engineerResult) => {
            const newEngineer = new Engineer(
              engineerResult.engineerName,
              engineerResult.engineerId,
              engineerResult.engineerEmail,
              engineerResult.engineerGithub
            );
            employeeArray.push(newEngineer);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Done adding members to the team?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  const employeeCards = generatePage(employeeArray);
                  fs.writeFile(`./dist/team.html`, employeeCards, (err) =>
                    err
                      ? console.log("Failed to generate.")
                      : console.log("Success")
                  );
                } else {
                  init();
                }
              });
          });
      } else {
        inquirer
          .prompt([
            {
              name: "internName",
              type: "input",
              message: "What is the intern's name?",
            },
            {
              name: "internId",
              type: "input",
              message: "What is the intern's ID?",
            },
            {
              name: "internEmail",
              type: "input",
              message: "What is the intern's email?",
            },
            {
              name: "internSchool",
              type: "input",
              message: "What is the intern's school?",
            },
          ])
          .then((result) => {
            const newIntern = new Intern(
              result.internName,
              result.internId,
              result.internEmail,
              result.internSchool
            );
            employeeArray.push(newIntern);
            inquirer
              .prompt([
                {
                  name: "doneCheck",
                  type: "list",
                  message: "Done adding members to the team?",
                  choices: ["Yes", "No"],
                },
              ])
              .then((ifDone) => {
                if (ifDone.doneCheck === "Yes") {
                  const employeeCards = generatePage(employeeArray);
                  fs.writeFile(`./dist/team.html`, employeeCards, (err) =>
                    err
                      ? console.log("Failed to generate.")
                      : console.log("Success")
                  );
                } else {
                  init();
                }
              });
          });
      }
    });
};

init();
module.exports = employeeArray;
