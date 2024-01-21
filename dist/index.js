#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const program = new commander_1.Command();
const text = 'typecligenius';
function generateFigletDescription() {
    const asciiArt = figlet_1.default.textSync('typeCliGenius', { font: 'Standard' });
    return `${asciiArt}\n \nA simple CLI tool with TypeScript and Commander, that executes basic math calculations`;
}
program
    .version('0.0.0')
    .description(generateFigletDescription());
program
    .command('sum <arg1> <arg2>')
    .description('Calculate the sum of two numbers')
    .action((arg1, arg2) => {
    // Your command logic here
    const number1 = parseFloat(arg1);
    const number2 = parseFloat(arg2);
    if (isNaN(number1) || isNaN(number2)) {
        console.error('Error: Please provide valid numbers.');
    }
    else {
        // calculation and print the sum 
        const sum = number1 + number2;
        console.log(`Sum ${number1} + ${number2} is: ${sum}`);
    }
});
program.parse(process.argv);
