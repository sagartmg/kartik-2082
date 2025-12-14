let countries = [
  {
    code: "af",
    name: "Afghanistan",
    path: "afghanistan",
  },
  {
    code: "al",
    name: "Albania",
    path: "albania",
  },
  {
    code: "dz",
    name: "Algeria",
    path: "algeria",
  },
  {
    code: "as",
    name: "American Samoa",
    path: "americansamoa",
  },
  {
    code: "alz",
    name: "Algeria",
    path: "algeria",
  },
];

// function findCountryCode(countryName) {
//   let code = null;

//   for (let index = 0; index < countries.length; index++) {
//     let country = countries[index];
//     if (country.name == countryName) {
//       code = country.code;
//       break;
//     }
//   }

//   return code;
// }

// function findCountryCode(countryName) {
//   for (let index = 0; index < countries.length; index++) {
//     let country = countries[index];
//     if (country.name == countryName) {
//       return country.code;
//     }
//   }
//   return null;
// }

const findCountryCode = (countryName) => {
  for (let index = 0; index < countries.length; index++) {
    let country = countries[index];
    if (country.name == countryName) {
      return country.code;
    }
  }
  return null;
};

// const findCountryCode = (countryName) => {
//   // countries.forEach()
// };

// if (findCountryCode("Algeriaa")) {
//   console.log(findCountryCode("Algeriaa"));
// } else {
//   console.log("not found");
// }

let result = findCountryCode("Algeriaa");
console.log(result ? result : "not found");

let colors = ["red", "orange", "black"];

// function printColor(color){
//     console.log(color)
// }

const printColor = (color,index) => {
  console.log(index,color);
};


// colors.forEach(printColor)


colors.forEach((color,index)=>{console.log(index,color)})


let todos = [
  {
    userId: 1,
    id: 1,
    title: "task one",
    completed: "false",
  },
  {
    userId: 1,
    id: 2,
    title: "task two",
    completed: "false",
  },
  {
    userId: 1,
    id: 3,
    title: "task three",
    completed: true,
  },
];

// function printTodo(todo,index){
//     console.log(index)
//     console.log(todo)
// }

const printTodo = (todo, index) => {
  console.log(todo);
};

// printTodo(todos[0])
// printTodo(todos[1])

todos.forEach(printTodo);


todos.forEach((todo)=>{ console.log(`${todo.title} is ${todo.completed == true ? "complted" : "pending"}` )  })
