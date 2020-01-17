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
      choices:[
              "View All Employees",
               "View All Employees By Department", 
               "View All Employees by Manager", 
               "Add Employee",
               "Add Role",
               "Add Department",
               "Remove Employee",
               "Update Employee Role", 
               "Update Employee Manager"  
              ]
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
      case"Add Employee":
            return addEmployee();
      case"Add Department":
            return addDepartment();
      case"Add Role":
            return addRole();
      case "Update Employee Role":
            return updateRole();
      case "Update Employee Manager":
            return updateManager();
      case "Remove Employee":
            return removeEmployee();
  }

  });
}

function viewAll(){
    let query = ("SELECT * FROM employees");
    connect.query(query, function(err, res){
      if (err) throw err;
      for(var i = 0; i < res.length; i++){
        console.log(res[i].id+"      |      " +res[i].first_name+"      |      "+ res[i].last_name + "      |      "+ res[i].role_id + "      |      "+ res[i].manager_id );
      }
    })
}
function viewAllByDep(){
  inquire.prompt([
    {
      type: "list",
      name: "department",
      message: "Which Department?",
      choices:[
               "Finance",
               "Engineering",
               "Sales",
               "Human",
               "Resources",
               "Legal",
               "Marketing" 
              ]
    }
    //get answers
  ]).then(answers => {
    let query = ("SELECT * FROM employees WHERE department = " + answers.department);
    connect.query(query, function(err, res){
      if (err) throw err;
      for(var i = 0; i < res.length; i++){
        console.log(res[i].id+"      |      " +res[i].first_name+"      |      "+ res[i].last_name + "      |      "+ res[i].role_id + "      |      "+ res[i].manager_id );
      }
    })
  })
}
function viewAllMan(){
    var managers = []
    let query = ("SELECT * FROM employees WHERE manager_id = NULL");
    connect.query(query, function(err, res){
      if (err) throw err;
      for(var i = 0; i < res.length; i++){
        managers.push(res[i])
      }
    });
  inquire.prompt([
    {
      type: "list",
      name: "managers",
      message: "Which Department?",
      choices:[ managers ]
    }
    //get answers
  ]).then(answer => {
    let query = ("SELECT * FROM employees WHERE manager_id = " + answer.managers);
    connect.query(query, function(err, res){
      if (err) throw err;
      for(var i = 0; i < res.length; i++){
        console.log(res[i].id+"      |      " +res[i].first_name+"      |      "+ res[i].last_name + "      |      "+ res[i].role_id + "      |      "+ res[i].manager_id );
      }
    })
  })
}
function addEmployee(){

}
function addDepartment(){

}
function addRole(){

}
function updateRole(){

}
function updateManager(){

}
function removeEmployee(){

}
