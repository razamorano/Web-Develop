
// array for user
var database = [
	{
		username:"ramon",
		password:"hi"
	}
];

var newsFeed = [
	{
		username:"boby",
		timeline: "So tired"
	},
	{
		username:"Sally",
		timeline:"Javase ssss"
	}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is you password?");

signIn(userNamePrompt,passwordPrompt);

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password){
		console.log(newsFeed[0].timeline);
	} else {
		alert("Wrong password!");
	}
}

