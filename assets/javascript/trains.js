// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDEncMpEGmZB-YzqtxpfuzxkXG1QvXRlGA",
    authDomain: "click-4bcad.firebaseapp.com",
    databaseURL: "https://click-4bcad.firebaseio.com",
    projectId: "click-4bcad",
    storageBucket: "click-4bcad.appspot.com",
    messagingSenderId: "1076834614283"
  };
  firebase.initializeApp(config);
//============================================================
// VARIABLES
var name; //name of the train inputed
var dest; //destination of train inputed
var ftime; //time the first train comes
var freq; //amount of time between trains in min
var table; //table in html where the data is displayed
var tableRow; //table row where data being added to the table is submitted
var database = firebase.database(); //firebase variable for storage
//============================================================
// CHECK FIREBASE
database.ref().on("value", function(snapshot) {

})
//============================================================
// WHEN SUBMIT IS CLICKED
$("#addTrain").on("click", function() {
	//get the input values from the form
	name = $("#name").val();
	dest = $("#dest").val();
	ftime = $("#ftime").val();
	freq = $("#freq").val();

	//create a <tr> and <td>s in table to put the new data and display
	$("#table").append("<tr><td>" + name +"</td><td>" + dest + "</td><td>" + freq + "</td></tr>");

})
//============================================================