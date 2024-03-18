//--------------------------Arrow Functions---------------------------------
//--------------------------------------------------------------------------

//______________________________________________ Vanilla JavaScript Function
/* 
function addTwoNumbers(a, b) {
     // Code block
     return a + b;
}
*/

//let sum = addTwoNumbers(3, 5);
//console.log(sum);


//____________________________________________ Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);


//________________________________ Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => (a + b);
let sum2 = addTwoNumbers2(5, 6);
console.log(sum2);


//__________________________________________________________ Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello World!');

const sayHello = () => console.log('Hello');
sayHello();


//__________________________________________________ Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
  This is a multiline string!
</P>`
)
console.log(returnMultipleLines());
