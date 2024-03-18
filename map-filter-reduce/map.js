//---------------------------------map()------------------------------------
//--------------------------------------------------------------------------

//_________________________________________________________ Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
};
console.log(results);


//______________________________________________________________ Using map()
const multiplyByTwo = function (num) {
    return num * 2;
};

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);


//_________________________________________________________ Simplified map()
const simplified = nums.map(function (num) { return num * 2});
console.log(simplified)


//___________________________________________ Simplified map() + => function
const simplified2 = nums.map(num => num * 2);
console.log(simplified2);


//_______________________________________________________ map() with objects
const students = [
    {
        id: 1,
        name: 'Mark',
        proffession: 'Developer',
        skills: 'JavaScript',
    },
    {
        id: 2,
        name: 'Ariel',
        proffession: 'Developer',
        skills: 'HTML',
    },
    {
        id: 3,
        name: 'Jason',
        proffession: 'Designer',
        skills: 'CSS',
    },
];

const filteredArray = students.map(students => ({name: students.name, id: students.id}));
console.log(filteredArray);