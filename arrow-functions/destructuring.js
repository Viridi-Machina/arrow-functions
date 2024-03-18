//------------------------------Destructuring-------------------------------
//--------------------------------------------------------------------------

//_____________________________________________________ Destructuring Arrays
let ages = [30, 26, 27];
// Vanilla assignment
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;
console.log(john, mary, joe);


//____________________________________________________ Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);


//____________________________________________________ Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

// Added commas skip elements of the array
let [, , , maryNative] = languages;
console.log(maryNative);
// result: 'mary = german'

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);


//______________________________________________ Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak',
};
let { brian, anna, ...rest } = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);