/*
 * Exercise: Refactor the code!
 *
 * This file is a collection of functions you've been asked to refactor.
 *
 * The primary purpose of this exercise is to use your judgement to decide when
 * and where to introduce appropriate abstractions, and whether you can use
 * either abstractions provided by JavaScript, or write your own.
 *
 * The command
 *   npm run s1.functions
 * will run tests to ensure the functions do what they should. They should all
 * still pass when you've finished refactoring.
 *
 * Advice:
 * + Try to recognise common patterns in the code.
 * + When you have recognised a pattern, think about if you could make a
 *   function to encapsulate it, instead of repeating code in several places.
 */
'use strict';
function upperFirst(word){
return word.slice(0, 1).toUpperCase().concat(word.slice(1));

}

function reverseWord (word){
  return word.split('').reverse().join('')
}



function capitaliseObjectKeys (input) {
  const result = {};

  Object.keys(input).forEach(function(key) {
    const capitalisedKey = upperFirst(key) 
    result[capitalisedKey] = input[key];
  });
  
  return result;
}


function capitaliseObjectValues (input) {
  const result = {};

  Object.keys(input).forEach(function(key) {
    const value = input[key];
    const capitalisedValue = upperFirst(value)
    result[key] = capitalisedValue;
  })

  return result;
}

function incrementObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  }

  return result;
}

function reverseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const reversedKey = reverseWord(keys[ii]);
    result[reversedKey] = input[keys[ii]];
  }

  return result;
}

module.exports = {
  capitaliseObjectKeys,
  capitaliseObjectValues,
  incrementObjectValues,
  reverseObjectKeys,
};
