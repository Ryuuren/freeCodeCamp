// Constructor that attaches a weight property to each instance.
// The weight property can be accessed and changed externally for each instance.
function BirdUnsafe() {
    // This weight property is specific to each instance.
    // Changes to one instance's weight won't directly affect others.
    this.weight = 15;
  }
  
  // Constructor that encapsulates the weight variable and provides controlled access.
  function Bird() {
    // This method sets a local weight variable within the constructor's scope.
    let weight = 15;
    
    // Defines a method to retrieve the encapsulated weight value.
    this.getWeight = function() {
      return weight;
    };
  }
  
  // Creates a new instance of Bird using the Bird constructor.
  let pidgeon = new Bird();
  
  // Accesses the getWeight method to retrieve the encapsulated weight value.
  console.log(pidgeon.getWeight()); // Outputs: 15
  