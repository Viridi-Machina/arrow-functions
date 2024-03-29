//---------------------------------reduce()---------------------------------
//--------------------------------------------------------------------------



// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// acc: accumulator, curr: current item value
// let sum = nums.reduce((acc, curr) => {
//     console.log(
//         'Accumulator:', acc,
//         'Current Value:', curr,
//         'Total:', acc + curr
//     );
//     return acc + curr;
// }, 10); 
// ', x' sets an initial index to start from

// Single line version
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
// Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience);

  
// Grouping by a property, and totaling it too
// Goal -> {Developer: 12, Designer: 4}
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {}) 

  console.log(experienceByProfession);

// Challenge, show names of each profession instead
// Goal -> { Developer: ['name', 'name']}
  let nameByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = [curr.name];
    } else {
        acc[key].push(curr.name);
    }
    return acc;
  }, {}) 

  console.log(nameByProfession);

// Challenge, filter for specific profession, then take highest experience
// Goal -> { Developer: 'name', yrsExperience: 'yrs'}
let bestInProfession = teamMembers.reduce((acc, curr) => {
    if (acc[key] === 'Developer') {
        acc[key] = [curr.name, curr.yrsExperience];
    } else {
        acc[key].push(curr.name, curr.yrsExperience);
    }
})
