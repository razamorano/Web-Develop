var database = [
	{
		user: "ramon",
		pass:"123"
	},
	{
		user: "maria",
		pass:"113"
	},
	{
		user: "juan",
		pass:"1213"
	}
];

var newsfeed = [
	{
		username: "clau",
		timeline:"hooola"
	},
	{
		username: "sofia",
		timeline:"ht"
	},
	{
		username: "cu",
		timeline:"hooasdasd"
	}
];


function isUserValid(username,password) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].user === username &&
			database[i].pass === password){
			return true;
		}
	}
	return false;
}

function signIn(username,password) {
	if (isUserValid(username, password)){
		console.log(newsfeed);
	} else {
		alert("Wrong password");
	}
}

var userNamePrompt = prompt ("What\'s your User Name?");
var passwordPrompt = prompt ("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);

// var todos = [
// 	"task 1",
// 	"task 2",
// 	"task 3",
// 	"task 4",
// 	"task 5"
// ];

// for (var i=0; i < todos.length; i ++) {
// 	todos[i]=todos[i] +  "A"
// 	console.log(todos[i]);
// }

// todos.forEach(function(todo,i){
// 	console.log(todo, i);
// })
// // counterOne=0;

// // while (counterOne <10){
// //  	counterOne++
// //  	setTimeout(() => { console.log(counterOne); }, 1000);
// // }

// // counterTwo=10
// // do  {
// // 	console.log(counterTwo)
// // 	counterTwo--;

// // } while (counterTwo > 0);