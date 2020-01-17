const mysql = require("mysql");
const inquire = require("inquirer");
const cTable = require("console.table");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Ronicobi2!",
  database: "employee_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Server listening")
  // run the start function after the connection is made to prompt the user
  init();
});


function init(){
  //prompt user to CRUD
  inquire.prompt([
    {
      type: "list",
      name: "initial",
      message: "What would you like to do?",
      choices:["View All Employees","View All Employees By Department", "View All Employees by Manager", "Add Employee","Remove Employee", "Update Employee Role", "Update Employee Manager"  ]
    }
    //get answers
  ]).then(answers => {
  //switch case
  //return prompts
  switch(answers.initial){
      case "View All Employees":
            return viewAll();
      case "View All Employees By Department":
            return viewAllByDep();
      case "View All Employees by Manager":
            return viewAllMan();
      case"Add Employee","Remove Employee":
            return addEmployee();
      case "Update Employee Role":
            return updateRole();
      case "Update Employee Manager":
            return updateManager()
  }

  });
}

function viewAll(){

}
function viewAllByDep(){

}
function viewAllMan(){

}
function addEmployee(){

}
function updateRole(){

}
function updateManager(){

}
