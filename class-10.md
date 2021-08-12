# JS

JavaScript is a difficult language to master, and everyone makes mistakes when coding it. This chapter will teach you how to identify and correct mistakes in your code. It will also show you how to write scripts that gracefully handle potential failures.
If you're writing JavaScript for the first time, don't expect to get it right the first time.
Programming is similar to problem solving in that you are given a puzzle and must not only solve it, but also provide the instructions that will allow the machine to solve it.

Nobody gets everything correctly the first time they write a long script. A browser's error messages may appear obscure at first, but they can help you figure out what went wrong with your JavaScript and how to solve it. This chapter will teach you about:
THE CONSOLE & DEVELOPMENT TOOLS Error-hunting tools incorporated into the browser.
9 COMMON PROBLEMS WITH ERROR HANDLING AND DEBUGGING
Errors that people make and how to fix them.
HANDLING \sERRORS
How can code gracefully deal with potential errors?

Knowing how scripts are handled can aid in locating the source of a problem.
The order in which instructions are executed can be confusing; for example, this script constructs a greeting message before writing it to an alert box (see right-hand page). Two functions are utilized to produce that greeting: greetUser () and getName ().
You might expect the execution order (the order in which statements are handled) to be numbered one through four. It is, however, a little more complicated.
The interpreter requires the results of the functions in steps two and three to complete step one (since the message contains values returned by those functions).

## EXECUION CONTEXTS 

Execution contexts are used by the JavaScript interpreter.
There is a single global execution context, as well as a fresh execution context for each function. They are the same as variable scope.
CONTEXT OF EXECUTION JavaScript
Every statement in a script is executed in one of three ways:
Q GLOBAL CONTEXT Code that isn't in a function but is in the script.
Every page has only one global context.
CONTEXT OF A FUNCTION Code that is executed within a function.
There is a function context for each function.
CONTEXT OF Q EVALUATION (NOT SHOWN)
In an internal function called eva l ), text is executed as code (which is not covered in this book)

THE SCOPE OF THE PROJECT IS VARIABLE
The first two execution contexts are related to the concept of scope (which you learned about on page 98):
Q GLOBAL PERSPECTIVE
Because a variable declared outside of a function has global scope, it can be used everywhere.
When you create a variable without using the var keyword, it is placed in global scope.
APPLICATION AT THE FUNCTION LEVEL
When you declare a variable within a function, you can only use it within that function. This is due to the fact that it has a function-level scope.

## UNDERSTANDING SCOPE 

var greeting = (function()
var d =new Date();
var time= d.getHours();
var greeting= greetUser{);
function greetUser() {
if (time < 12) {
var msg
else {
var msg
'Good morning ';
'Welcome ' ;
return= msg + getName();
funct i on getName() {
var name = 'Molly';
return name;
} ) ;
alert(greeting); 

Each execution context in the interpreter has its own variables object.
It contains all of the variables, functions, and parameters that are available.
Each execution context has access to the variables object of its parent.
Lexical scope is a term used in JavaScript to describe the scope of functions.
They are associated with the object in which they were defined.
The scope of each execution context is the variables object of the current execution context plus the variables object of each parent execution context.
Consider each function to be a nesting doll.
Children might inquire about their variables from their parents. Parents, on the other hand, are unable to obtain variables from their children. Each youngster will receive the identical response from their parents.

If a variable isn't discovered in the current execution context's variables object, it can be found in the parent execution context's variables object.
However, because scanning up the stack can influence performance, it's best to create variables inside the functions that use them.
The inner functions in the example on the left can access the outer functions and their variables. The greetUser() method, for example, has access to the time variable declared in the outer greeting() function.
When you call a function, it gets its own execution environment and variables object.
When an outside function calls an inside function, the inner function is called.

## UNDERSTANDING ERRORS 

If a JavaScript statement produces an error, an exception is thrown.
The interpreter then comes to a halt and searches for exception-handling code.
If you suspect that something in your code will produce an error, you can use a collection of statements to deal with it (you meet them on p480).
This is critical because if the problem isn't handled, the script will just cease working and the user will have no idea why. As a result, exception-handling code should notify users when a problem arises.
The interpreter will look for error-handling code whenever it encounters an error. The code in the diagram below has the same structure as the code in the pictures at the beginning of the chapter.
When an exception is thrown, the interpreter comes to a halt and looks for exception-handling code in the current execution context. As a result, if an error occurs in the getName () function (3), the interpreter looks for error-handling code in that function.
When a function encounters an error and the function lacks an exception handler, the interpreter jumps to the line of code that called the function.
Because greetUser() calls the obtain Name () function, the interpreter looks for exceptionhandling code in the greetUser() function (2).
If none are discovered, the process moves on to the next level, where it looks for code to handle the issue in that execution context. It can go on indefinitely.

## HOW TO DEAL WITH ERRORS

Now that you understand what an error is and how the browser handles them, you have two options for dealing with them.
1: FIX ERRORS IN THE SCRIPT BY DEBUGGING IT
You must debug the code, find down the source of the error, and correct it if you encounter an error when writing a script (or if someone reports a fault).
Developer tools, which are accessible in every major modern browser, will assist you with this task. The developer tools in Chrome and Firefox are covered in this chapter. (The tools in Chrome and Opera are identical.)
IE and Safari each have their own set of tools (too many to list here).

Developer tools, which are accessible in every major modern browser, will assist you with this task. The developer tools in Chrome and Firefox are covered in this chapter. (The tools in Chrome and Opera are identical.)
IE and Safari each have their own set of tools (too many to list here).

## A DEBUGGING WORKFLOW

Deduction is at the heart of debugging: it's all about ruling out possible reasons of a mistake.
Here's a breakdown of the techniques you'll encounter throughout the next 20 pages.
Try to pinpoint the source of the problem before looking for clues.
WHAT EXACTLY IS THE PROBLEM?
To begin, attempt to narrow down the area where the issue appears to be. This is especially significant in a long script. Particularly significant.
1. Take a look at the error notice, which states:
• The specific script that created the issue.
• The line number where the interpreter encountered a problem. (As you'll see, the problem may have occurred earlier in the script, but this is the point at which it couldn't proceed.)
• The type of error (despite the fact that the underlying cause of the error may differ).
2. Determine how far the script has progressed.
To see how far your script has run, use tools to write messages to the console.
3. Use breakpoints in places where things aren't working.
They allow you to halt the execution of a program and view the values contained in variables.
Many programmers recommend that if you're stuck on an error, you try to convey the scenario (aloud) to another coder. Describe what should be occurring and where the error appears to be occurring. This appears to be a reliable method for detecting problems in all programming languages. (If no one else is accessible, try telling yourself about it.)

WHAT IS THE EXACT PROBLEM?
You can then try to discover the exact line of code that is generating the error once you believe you have a rough idea of where your problem is.
1. Once you've placed your breakpoints, you may check to see if the variables around them contain the values you expect. If not, go back to the beginning of the script.
2. Dismantle I divide up the code into smaller chunks to test different aspects of the functionality.
• Enter variable values into the console.
• Use the console to test calrfunctions to see whether they're returning what you'd expect.
• Verify that the objects you're looking for exist and have the methods I properties you're looking for.
3. Determine how many parameters a function has or how many objects are in an array.
And be prepared to go through the same process again if the above fixes one mistake just to reveal another...
If the problem is difficult to locate, it's easy to lose track of what you've tried and what you haven't. As a result, when you begin debugging, keep track of what you've tried and what the outcome was. If you can keep calm and systematic no matter how stressful the situation is, the problem will feel less overwhelming and you will be able to solve it faster.