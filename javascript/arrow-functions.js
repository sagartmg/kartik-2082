let courses = ["mern", "python", "qa"];

/* TODO: Create a function that takes an array and returns the first element. 
    exmple.

    getFirstElement(courses) // EXPECTED-OUTPUT : mern


*/

// function getFirstElement(arr) {
//   return arr[0];
// }

const getFirstElement = (arr) => {
  return arr[0];
};

console.log(getFirstElement(courses));
console.log(getFirstElement(["ram", "hari", "shyam"]));

// function double(number) {
//   return number * 2;
// }

// const double = (number ) =>{
//     return number * 2
// }


// const double = (number) => number * 2;


const double = number => number * 2;

console.log(double(2));
