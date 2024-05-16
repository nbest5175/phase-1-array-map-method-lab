const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join (' ');
  });
} 

console.log(titleCased)


// titled case - returns an array with title case tutorial names, 
// takes no arguments,
// use the global tutorials variable as data
// Need to iterate through the tutorials array, 
// Modify the name of each (aka capital letters for each word in each string)

// How can I "iterate" through individual words in a string?
// Can I execute an iteration inside an iteration? If so, how?
// How can I capitalize the 1st letter of each word in the string?

// Breakdown of each line of code.
// const is the key word for declaring a variable provided 
// titleCased is the array for the list of elements
//tutorials.map- Inside the function, we use the .map() method on the tutorials array to create a new array with modified elements.
// tutorial => - set a new array for the following return
// return tutorial.split(' ') - purpose was to divide the string into an array of substrings, splitting wherever it finds a double space
// .map(word => word.charAt(0).toUpperCase() 
// explain the code above ^ retrieve the 1st character of the word using 'charAt(0) then convert to uppercase with 'toUpperCase'
// + tutorial.slice(1))
// explain the code above ^ links together the capitalized 1st letter with the rest of the word, then 'tutorial.slice(1) returns substring of tutorial, excluding the 1st letter. 
// .join (' ') - Then .join joins all elements of array in single string