// Basic Algorithm Scripting: factorialize

/*Description
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

Tests

factorialize(5) should return a number.
factorialize(5) should return 120.
factorialize(10) should return 3628800.
factorialize(20) should return 2432902008176640000.
factorialize(0) should return 1.
*/

//Solution 2 on FCC
function factorialize(num) {                    //1
    //console.log(num);                         //1.1
    if (num === 0) {                            //2
      return 1;                                 //3
    }
    return num * factorialize(num - 1);         //4
  }
  
    console.log(factorialize(5));               //5
//Output = 120


 //Notes To help me understand the code by line


 /*
  FCC notes

    Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion. 
    
    If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels. 
    
    If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a Stack Overflow */

   /*
        This Algorithm makes use of recursion. 

        What is recursion?____
        Recursion is a method of solving problems that involves breaking a problem down into smaller and smaller subproblems until you get to a small enough problem that it can be solved trivially. Usually recursion involves a function calling itself.

        source - [https://runestone.academy/runestone/books/published/pythonds/Recursion/WhatIsRecursion.html]


        1       - function factorialize(num) {
                - The function declaration (function statement) defines a function with the specified parameters.
                - You can also define functions using the Function constructor and a function expression.
                - source - [https://devdocs.io/javascript/statements/function]


        1.1     - 5
                  4
                  3
                  2
                  1
                  0

        2., 3.  - condition to check the end of the recursion and return 1 when num is at 0

        4.      - can be visualized as follows:

                                                      5   *   4 = 20
                                    The return value  20  *   3 = 60
                                    The return value  60  *   2 = 120
                                    The return value  120 *   1 = 120
                                    The return value  120 *   1 = 120 = At this point the condition for the if statement executes and converts 0 to 1


        5.      - Calls the factorialize function to execute code
  */