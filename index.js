const inquirer = require('inquirer');
const generateMD= require('./utils/generateMarkdown.js');
const fs = require('fs');
const { prompt } = require('inquirer');

const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of the project?"
	}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	prompt(questions)
	.then((answers) => {
		console.log(answers);
	});
};

// Function call to initialize app
init();
