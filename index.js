const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { prompt } = require('inquirer');
// const a = require('./src/mockData.js');

const answers =	{
	title: "README Generator",
	description: "A command line application that uses a series of questions about your GitHub project to generates a README.md file for that project",
	installInstructions: "Change to directory and glit clone. Then npm install. ",
	useCase: "For consistently generating a professional README.md file for your project",
	license: "MIT",
	contributors: "David Barraza",
	tests: "None",
	githubUser: "dbcomps",
	email: "myemail@where.com"
};

const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of the project?"
	},
	{
		type: "input",
		name: "description",
		message: "Provide a short Description of the project."
	},
	{
		type: "input",
		name: "installInstructions",
		message: "Please provide installation instructions."
	},
	{
		type: "input",
		name: "useCase",
		message: "What is the use case/purpose of your project?"
	},
	{
		type: "list",
		name: "license",
		message: "What is the licence of your project?",
		choices: ["MIT", "GPLv3", "BSD3", "None"]
	},
	{
		type: "input",
		name: "contributors",
		message: "Who contributed to the project?"
	},
	{
		type: "input",
		name: "tests",
		message: "What tests are part of the project?"
	},
	{
		type: "input",
		name: "githubUser",
		message: "Enter your GitHub profile name:"
	},
	{
		type: "input",
		name: "email",
		message: "Enter your email:"
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) throw err;
		console.log('File created!');
	})
}

// TODO: Create a function to initialize app
function init() {
// 	prompt(questions)
// 	.then((data) => {
// 		console.log(data);
// 		writeToFile("./test/README.md", generateMD(data));
		writeToFile("./test/README.md", generateMD(answers));
// 	});
};

// Function call to initialize app
init();
