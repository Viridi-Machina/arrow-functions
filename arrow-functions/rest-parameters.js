//---------------------------Rest Operator Syntax---------------------------
//--------------------------------------------------------------------------

//____________________________________________________ Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log('Sum:', sum);
// result: 'Sum: 6'


//______________________________________________ Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log('Sum2:', sum2);
// result: 'Sum: 6' -> is the same as above


//___________________________________________________ Function using ...rest
// Note the importance is the use of the '...'; 'rest' could have any name
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log('Sum3:', sum3);