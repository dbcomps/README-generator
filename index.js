const inquirer = require('inquirer');
const generateMD= require('./utils/generateMarkdown.js');
const fs = require('fs');
const { prompt } = require('inquirer');

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
		type: "input",
		name: "license",
		message: "What is the licence of your project?"
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
	prompt(questions)
	.then((answers) => {
		console.log(answers);
		writeToFile("./test/README.md", generateMD(answers));
	});
};

// Function call to initialize app
init();
