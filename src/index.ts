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


program
  .command('mul <arg1> <arg2>')
  .description('calculation multiplay two numbers')
  .action((num1, num2)=>{
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if(isNaN(number1) || isNaN(num2)){
      console.error('Error: Please provide valid numbers.');
    }else{
      const mul = number1 * number2;
      console.log(`Mul ${number1} * ${number2} is: ${mul}`); 
    }
  })



program
  .command('sub <arg1> <arg2>')
  .description('calculate substration of two numbers')
  .action((num1 , num2)=>{
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);


    if(isNaN(number1) || isNaN(number2)){
        console.error('Error: Please provide valid numbers.');
    }else{
        // calculation and print the sub 
        const sub = number1 - number2;
        console.log(`Sub ${number1} - ${number2} is: ${sub}`); 
    }
  })

program
  .command("div <arg1> <arg2>")
  .description("calculation the division")
  .action((num1 , num2 )=>{
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if(isNaN(number1) || isNaN(number2)){

    }else{
      if(number2 != 0){
        const div = number1 / number2;
        console.log(`div ${number1} / ${number2} is: ${div}`); 
      }else{
        console.log("you can't divide a number by 0")
      }

    }
  })

program.parse(process.argv);
