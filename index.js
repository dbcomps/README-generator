const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown.js').generateMarkdown;
const renderBadge = require('./utils/generateMarkdown.js').renderLicenseBadge;
const renderLicenseTerms = require('./utils/generateMarkdown.js').renderLicenseSection;
const fs = require('fs');
const { prompt } = require('inquirer');
// const a = require('./src/mockData.js');

const answers =	{
	title: "README Generator",
	description: "A command line application that uses a series of questions about your GitHub project to generate a professional README.md file for that project",
	installInstructions: "Change directory you will place this project and git clone. Then npm install. ",
	useCase: "For consistently generating a professional README.md file for your project",
	license: "MIT",
	contributors: "David Barraza",
	tests: "None",
	githubUser: "dbcomps",
	email: "myemail@nowhere.com"
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
		choices: ["Apache 2.0", "BSD 3", "BSD 2", "GPL v3", "GPL v2", "IBM", "MIT", "Mozilla"]
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
		renderLicenseTerms(answers);
		renderBadge(answers);
// 		writeToFile("./dist/README.md", generateMD(data));

		writeToFile("./test/README.md", generateReadme(answers));
// 	});
};

// Function call to initialize app
init();
