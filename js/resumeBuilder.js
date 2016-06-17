/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Marcos Silva");

// var awesomeThoughts = "I am Marcos Silva and i am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// console.log(funThoughts);
//$("#main").append(funThoughts);

var name = "Marcos Silva";
var role = "Web Master";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesome", "programmer", "beast", "web developer", "CCNA Security"]

var bio = {
	"name" : "Marcos Silva",
	"role" : "Web Master",
	"contacts" : {
		"mobile" : "+351",
		"email" : "marcosilva-@hotmail.com",
		"location" : "Vialonga"
	},
	"pictureUrl" : "<img src = "D:\\Curso_Google\\frontend-nanodegree-resume-master\\images\\fry.jpg"/>,
	"welcomeMessage" : "Bienvenido",
	"skills" : skills
}

$("#header").append(bio.pictureUrl);

var work = {
	"job" : "Estudante",
	"employer" : "ISEL",
	"years" : "10",
	"city" : "Lisboa"
}

var education = {
	"name" : "ISEL",
	"years" : "3",
	"city" : "Chelas"
}











