const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"];

let fakeDbUsers = [];

nepaliNames.forEach((el, index) => {
  // fakeDbUsers[index] = {
  //     name: el,
  //     email: el + "@gmail.com",
  //     password: el + index,
  // };
  fakeDbUsers.push({
    name: el,
    email: el + "@gmail.com",
    password: el + index,
  });
});

console.log(fakeDbUsers);
// let fakeUsers = nepaliNames.map((el,index) =>{
//     return {name:el,password:el+index,email:el+"@gmail.com"}
// })

let fakeUsers = nepaliNames.map((el, index) => ({
  name: el,
  password: el.toLowerCase() + index,
  email: el + "@gmail.com",
}));

console.log({ fakeUsers });

/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

let numbers = [1, 2, 3];
let doubledValues = [];

// doubledValues.push(2)
// doubledValues.push(4)
// doubledValues.push(6)

numbers.forEach((el) => doubledValues.push(el * 2));

console.log(doubledValues);

let tripleValues = numbers.map((el) => el * 3);
console.log({ tripleValues });
