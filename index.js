const inquirer = require("inquirer");
const getSite = require("./src/getSite.js");
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
};

init();
module.exports = employeeArray;