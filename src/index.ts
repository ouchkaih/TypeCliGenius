#!/usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';

const program = new Command();


const text = 'typecligenius';

function generateFigletDescription(): string {
  const asciiArt = figlet.textSync('typeCliGenius', { font: 'Standard' });
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


    if(isNaN(number1) || isNaN(number2)){
        console.error('Error: Please provide valid numbers.');
    }else{


        
        
        // calculation and print the sum 
        const sum = number1 + number2;
        console.log(`Sum ${number1} + ${number2} is: ${sum}`); 
    }
  });

program.parse(process.argv);
