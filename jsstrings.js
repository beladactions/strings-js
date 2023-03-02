/*

=======
STRINGS
=======

Strings are best known as texts
and in JavaScript they are sequence of characters enclosed in either single quotes (' ') or double quotes (" ").

*/

// Declare strings

let str1 = "Hello, World!"; // using double quotes
let str2 = 'JavaScript is awesome!'; // using single quotes



/* 
You can also create strings using template literals (enclosed in backticks ``), 
which allow you to embed expressions in the string using the ${expression} syntax
*/

let name = 'John';
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); 


/* Strings are immutable i.e the words of a declared string can not be changed
but we can perform the following operations:

=============
CONCATENATION
=============

You can concatenate two or more strings together using the + operator or the concat() method. 

*/

// Declare strings

let str1 = "Hello, World!"; // using double quotes
let str2 = 'JavaScript is awesome!'; // using single quotes

//cocatenate using the + operator

console.log(str1 + " " + str2)

// cocatenate using the cocat() method

let strAll = str1.concat(str2)
console.log(strAll)

/*

=======
SLICING
=======

The slice() method takes two arguments: the starting index and the ending index to extract a portion of the string

*/

// Declare the variables

let str = "JavaScript is awesome";
let substr = str.slice(0, 10);
console.log(substr);

/*

=========
REPLACING
=========

You can replace a portion of a string with another string using the replace() method.

*/

let str = "JavaScript is awesome";
let newStr = str.replace("JavaScript is", "I am");
console.log(newStr); 

