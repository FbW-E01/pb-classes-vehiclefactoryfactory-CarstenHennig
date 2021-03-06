// # Vehicle Factory Factory

// Create "factory factory" function that returns a constructor function.

// The factory factory takes in one parameter, "type".

// Each created factory needs to create objects with this given type.

// Each created factory needs to take in three parameters and save them to the created objects:
// - make
// - model

// Use your factory factory to create at least five factories, such as
// - bicycle factory
// - car factory
// - boat factory
// - blimp factory
// - train factory

// Lastly, use those factories to create some vehicles.

// Store all your created vehicles inside one array, loop over that array and print out each vehicle.

// Question: Check the *type* of your factories and of the objects that your factories create -
// what is the type of a factory and what is the type of a created object?
// Add your answer as comments into into your solution file.

function FactoryFactory(type, make, model) {
  this.type = type; // basic type will be changed in object's types, i.e. "Bicycle", "Car" and so on
  this.make = make;
  this.model = model;
}

let allVehicles = [""];
for (let i = 0; i < 5; i++) {
  const bicycleFactory = new FactoryFactory("Bicycle", "05-17-2021", "sport"); //new type "Bicycle" in new object bicycleFactory created from basic object stored in function FactoryFactory
  console.log(bicycleFactory);
  allVehicles.push(bicycleFactory);
}

let i = 0;
do {
  const carFactory = new FactoryFactory("Car", "05-16-2021", "Cabrio"); // new type "Car" in "new object "car" created from basic object stored in function FactoryFactory
  console.log(carFactory);
  i += 1;
  allVehicles.push(carFactory);
} while (i < 5);

for (let i = 0; i < 5; i++) {
  const boatFactory = new FactoryFactory("Boat", "05-15-2021", "Sailing boat"); // new type "Boat"
  console.log(boatFactory);
  allVehicles.push(boatFactory);
}

let j = 0;
while (j < 5) {
  console.log(j);
  const blimpFactory = new FactoryFactory(
    "Blimp", // new type "Blimp"
    "05-14-2021",
    "Cargo Zeppelin"
  );
  console.log(blimpFactory);
  allVehicles.push(blimpFactory);
  j++;
}

for (i = 0; i < 2; i++) {
  const trainFactory = new FactoryFactory("Train", "05.13.2021", "ICE"); // new type "Train"
  console.log(trainFactory);
  allVehicles.push(trainFactory);
}

// console.log(allVehicles);

// Displaying all new vehicles sorted by type
let allResult = [""];
typeOfVehicle = ["Biycyle", "Car", "Boat", "Blimp", "Train"];
for (let i = 0; i < typeOfVehicle.length; i++) {
  let result = allVehicles.filter(
    (element) => element.type === typeOfVehicle[i]
  );
  console.log("All vehicles of type " + typeOfVehicle[i]);
  console.log(result);
}
