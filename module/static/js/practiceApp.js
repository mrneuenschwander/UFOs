// import the table data from app.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select('tbody')
// simple JS console.log stmt
function printHello() {
    console.log("General Kenobi!");
}
// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
// Converted to an arrow function
addition = (a, b) => a + b;

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

doubleAddition = (c, d) => addition(c, d)*2;

// next section of stuff

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 };
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
};
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 };