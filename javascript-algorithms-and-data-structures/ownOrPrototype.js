function Dog(name) {
  // Own property
  this.name = name;
}

// Prototype property
Dog.prototype.numLegs = 4;

// Creates a new instance of Dog, passing the name
let beagle = new Dog("Snoopy");

// Initialises empty arrays for separating own/prototype properties
let ownProps = [];
let prototypeProps = [];

// Iterates over the properties of the new Dog...
// ...and sorts them into own/prototype properties
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// This will only log the own property of name
console.log(beagle);
// Dot notation can access the prototype property, if...
// ...the property name is known ahead of time
console.log(beagle.numLegs);
// This method can log any prototype properties...
// ...without having to know their property names
console.log(Object.getPrototypeOf(beagle));
