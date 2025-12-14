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
  //   {
  //     code: "alz",
  //     name: "Algeria",
  //     path: "algeria",
  //   },
];

// function printCountry(country) {
//   console.log(country);
// }

const printCountry = (country) => {
  console.log(country);
};

// printCountry(countries[0]);
// printCountry(countries[1]);

// countries.forEach(printCountry);

// const findCountryCode = (countryName) => {
//   for (let index = 0; index < countries.length; index++) {
//     let country = countries[index];
//     if (country.name == countryName) {
//       return country.code;
//     }
//   }
//   return null;
// };

// const findCountryCode = (countryName) => {
//   let code = null;

//   countries.forEach((country) => {
//     if (country.name == countryName) {
//       code = country.code;
//     }
//   });

//   return code;
// };

// const findCountryCode = (countryName) => {
//   countries.find((country) => {
//     return true;
//   });
// };

const findCountryCode1 = (countryName) => {
  let matchedCountry = countries.find((country) => {
    if (country.name == countryName) {
      return true;
    }
  });

  return matchedCountry?.code || null;

  return matchedCountry?.code ? matchedCountry.code : null;
  return matchedCountry.code ? matchedCountry.code : null;
};



const findCountryCode = (countryName) => {
  let matchedCountry = countries.find((country) => country.name == countryName);
  return matchedCountry?.code || null;
};

console.log(findCountryCode("Nepal"));
console.log(findCountryCode("Algeria"));
