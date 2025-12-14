function showAlert() {
  console.log("show alert");
}

// setTimeout(showAlert());
// setTimeout(undefined);

setTimeout(showAlert, 2000);

/* 
    callback functions  
    a function passed as arguement to another function
    
*/

let dog = {
  name: "pug",
  makeSound: function () {
    console.log("bark");
  },
};

dog.makeSound();
