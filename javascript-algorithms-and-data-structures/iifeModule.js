let funModule = (function () {
  // The module object is being returned from the IIFE.
  return {
    // isCuteMixin is a mixin function that adds an isCute method to an object.
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    // singMixin is a mixin function that adds a sing method to an object.
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

// Initialises an object for testing the IIFE module
let myObject = {};

// Applying the isCuteMixin and singMixin to the test object
funModule.isCuteMixin(myObject);
funModule.singMixin(myObject);

console.log(myObject.isCute()); // Outputs: true
myObject.sing(); // Outputs: "Singing to an awesome tune"

// By packaging the related functions into an IIFE module...
// ...it encapsulates them and provides a convenient way to apply them
// ...to objects, enhancing code organization and reusability.
