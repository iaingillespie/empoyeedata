// Initialize Firebase
var config = {
  apiKey: "AIzaSyDdOzgW64h0XpCasrBLA1MpedTJkbZ1Kro",
  authDomain: "employee-database-ff411.firebaseapp.com",
  databaseURL: "https://employee-database-ff411.firebaseio.com",
  projectId: "employee-database-ff411",
  storageBucket: "",
  messagingSenderId: "1005544872924"
};
firebase.initializeApp(config);

var database = firebase.database();

// ID's: employee-name, employee-role,
var MothsWorked = 0;

var empName;
var empRole;;
var startDate;
var monthsWorked;
var empRate;
var empBilled;

$("#submit").on("click", function(event) {
  var empName = $("id-here").val().trim();
  var empRole = $("id-here").val().trim();
  var startDate = $("id-here").val().trim();
  var empRate = $("id-here").val().trim();

  // var monthsWorked = "TODAY'S-DATE" - startDate;
  var empBilled = monthsWorked * empRate;
})
database.ref().push({
  name: "bob",
  role: "boss",
  age: 10,
  startDate: "01jan18"
});

console.log(database);
