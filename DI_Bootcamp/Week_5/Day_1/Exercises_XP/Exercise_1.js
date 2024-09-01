// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne() // Prediction: The alert will display "inside the funcOne function 3" because a is reassigned to 3 inside the if block.

// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Prediction: If a is declared with const, it will cause an error because const variables cannot be reassigned.


// // #2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // Prediction: The alert will display "inside the funcThree function 0" because funcTwo has not been called yet.
// funcTwo() // Prediction: This will change the value of a to 5.
// funcThree() // Prediction: The alert will display "inside the funcThree function 5" because funcTwo has changed the value of a to 5.

// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Prediction: If a is declared with const, it will cause an error when funcTwo tries to reassign a because const variables cannot be reassigned.


// // #3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour() // Prediction: This will set the global variable a to "hello".
// funcFive() // Prediction: The alert will display "inside the funcFive function hello" because funcFour has set the global variable a to "hello".


// // #4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix() // Prediction: The alert will display "inside the funcSix function test" because the a inside funcSix is a local variable and shadows the global a.

// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Prediction: If a is declared with const inside funcSix, it will still work the same way because the local a is not reassigned.


// #5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// Prediction: The first alert will display "in the if block 5" because the a inside the if block is a local variable. The second alert will display "outside of the if block 2" because the global a is not affected by the if block.

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Prediction: If a is declared with const, it will still work the same way because the local a inside the if block is not reassigned.
