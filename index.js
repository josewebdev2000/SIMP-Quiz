// Save all selected answers in an array
var selectedAnswers = [];

// Select relevant DOM elements
var header = document.querySelector("header");
var questionsSection = document.querySelector("section.question");
var resultsSection = document.querySelector("section.result");
var buttonsSection = document.querySelector("section.buttons");
var previewH2 = document.querySelector("section.question h2");
var questionH3 = document.querySelector("section.question h3");
var againButton = document.querySelector("#again");
var resultHeading = document.querySelector("#result-heading");
var resultPicture = document.querySelector("#result-picture");

var descriptions = document.querySelectorAll(".desc-list > li > p");
var answers = document.querySelectorAll("div.answers ol li");
var buttons = document.querySelectorAll("section.buttons > button");

// Convert the answers and buttons nodelist to arrays
answers = Array.prototype.slice.call(answers);
buttons = Array.prototype.slice.call(buttons);
descriptions = Array.prototype.slice.call(descriptions);

// Make an array of relevant elements
var relevantElements = answers.concat(buttons);
