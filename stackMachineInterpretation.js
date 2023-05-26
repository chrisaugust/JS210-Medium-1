// PROBLEM
// Write a function that implements a miniature stack-and-register
// based programming language that has the following commands (aka
// operations or tokens):
//
// n: place a value 'n' in the register. Do not modify the stack.
//
// PUSH: push the register value onto the stack. Leave the value 
// in the register.
//
// ADD: pop a value from the stack and add it to the register value,
// storing the result in the register.
//
// SUB: pop a value from the stack and subtract it from the register
// value, storing the result in the register.
//
// MULT: pop a value from the stack and multiply it by the register
// value, storing the result in the register.
//
// DIV: pop a value from the stack and divide the register value by
// the popped stack value, storing the integer result back in the
// register.
//
// REMAINDER: pop a value from the stack and divide the register value
// by the popped stack value, storing the integer remainder back in
// the register
//
// POP: remove the topmost item from the stack and place it in the register.
//
// PRINT: print the register value.
//
// All operations are integer operations (only important for DIV and 
// REMAINDER)
//
// Programs will be supplied to the language function by string argument.
// Assume that all arguments are valid programs, ie they will not attempt
// anything like attempting to pop a non-existent value from the stack, nor
// will they contain any unknown operations.
//
// Initialize the stack and register to [] and 0 respectively.
//
// EXAMPLES
// minilang('PRINT');
// // 0
// 
// minilang('5 PUSH 3 MULT PRINT');
// // 15
// 
// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8
// 
// minilang('5 PUSH POP PRINT');
// // 5
// 
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7
// 
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6
// 
// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12
// 
// minilang('-3 PUSH 5 SUB PRINT');
// // 8
// 
// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
//
// 
// DATA STRUCTURES
// Stack (Array)
//
// ALGORITHM
// split program into arguments and operations by splitting on ' '
//
//
// CODE

function minilang(program) {
  let stack = [];
  let register = 0;
  let operations = program.split(' ');

  function push() {
    stack.push(register);
  }

  function pop() {
    register = stack.pop();
  }

  function print() {
    console.log(register);
  }

  function add() {
    register += stack.pop();
  }
    
  function sub() {
    register -= stack.pop();
  }

  function mult() {
    register *= stack.pop();
  }

  function div() {
    register = parseInt(register / stack.pop(), 10);
  }

  function remainder() {
    register = register % stack.pop();
  }

  while (operations.length > 0) {
    let token = operations.shift();
    if (token === 'PRINT') {
      console.log(register);
    } else if (token === 'ADD') {
      add();
    } else if (token === 'SUB') {
      sub();
    } else if (token === 'PUSH') {
      push();
    } else if (token === 'POP') {
      pop();
    } else if (token === 'MULT') {
      mult();
    } else if (token === 'DIV') {
      div();
    } else if (token === 'REMAINDER') {
      remainder();
    } else {
      register = parseInt(token, 10);
    }
  }
}
 
// TESTS
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// // 5
 
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6
  
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12
 
minilang('-3 PUSH 5 SUB PRINT');
// 8
  
minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
