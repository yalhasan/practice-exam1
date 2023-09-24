//practice 2
const cars = [
  {
    id: 401,
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue",
  },
  {
    id: 402,
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Silver",
  },
  {
    id: 403,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    color: "Red",
  },
  {
    id: 404,
    make: "Chevrolet",
    model: "Tahoe",
    year: 2022,
    color: "Black",
  },
  {
    id: 405,
    make: "Nissan",
    model: "Altima",
    year: 2020,
    color: "White",
  },
];

/**********
  Question 1:
  You have a function getCarMake(car) that:
  - receives a car object
  - returns the make (brand) of the car
  Don't forget to uncomment the console.log
  ===
  ANSWER: Toyota
  **********/

function getCarMake(car) {
  return car.make;
}
//console.log(getCarMake(cars[0]));

/**********
  Question 2:
  You have a function that:
  - receives a car object
  - receives a car color (string)
  - returns true if the car's color matches the provided color, otherwise returns false
  ===
  ANSWER: false
  **********/

function isCarColorMatching(car, color) {
  if (car.color == color) {
    return true;
  } else {
    return false;
  }
}
//console.log(isCarColorMatching(cars[1], "Blue"));

/**********
  Question 3:
  addCar(cars, car):
  - receives an array of car objects
  - receives a new car object (with id, make, model, year, and color)
  - adds the new car to the array
  - returns the updated array
  ===
  ANSWER: 
  [
    {
      "id": 401,
      "make": "Toyota",
      "model": "Camry",
      "year": 2021,
      "color": "Blue"
    },
    {
      "id": 402,
      "make": "Honda",
      "model": "Civic",
      "year": 2020,
      "color": "Silver"
    },
    {
      "id": 403,
      "make": "Ford",
      "model": "Mustang",
      "year": 2019,
      "color": "Red"
    },
    {
      "id": 404,
      "make": "Chevrolet",
      "model": "Tahoe",
      "year": 2022,
      "color": "Black"
    },
    {
      "id": 405,
      "make": "Nissan",
      "model": "Altima",
      "year": 2020,
      "color": "White"
    },
    {
      "id": 406,
      "make": "Kia",
      "model": "Sorento",
      "year": 2021,
      "color": "Green"
    }
  ]
  **********/

function addCar(cars, car) {
  cars.push(car);
  return cars;
}

const newCar = {
  id: 406,
  make: "Kia",
  model: "Sorento",
  year: 2021,
  color: "Green",
};

//console.log(addCar(cars, newCar));

/**********
  Question 4:
  countCarsMadeInYear(cars, year):
  - receives an array of car objects
  - receives a manufacturing year (number)
  - returns the number of cars made in the specified year
  ===
  ANSWER: 2
  **********/

function countCarsMadeInYear(cars, year) {
  let count = 0;
  cars.forEach((car) => {
    if (car.year == year) {
      count++;
    }
  });
  return count;
}
//console.log(countCarsMadeInYear(cars, 2020));
