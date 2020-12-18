/**
** Exercise 3: Guess the output **
Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.
*/

// it will alert 12 because we reassignesd the variable in the function and the alert is in the function
// that child of the x function so it has an access to the parent function(scope)
// if we used const for an example insted of let it will show that the variable is already declared

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();