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

