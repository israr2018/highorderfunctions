fill()
//The fill() method replaces all the elements in an array with a static value.

let fish = [ "piranha", "barracuda", "koi", "eel" ];
//In the fish array, we have four items. Let’s apply fill().

// Replace all values in the array with "shark"
fish.fill("shark");

//[ 'shark', 'shark', 'shark', 'shark' ]
//All four items in the array have been replaced with the same value, "shark". fill() also takes optional arguments of start and end points.
console.log("fish==",fish);
fish.fill("shark", 1) // > [ 'piranha', 'shark', 'shark', 'shark' ]
fish.fill("shark", 1, 3); // > [ 'piranha', 'shark', 'shark', 'eel' ]
//Using fill() we can replace one or more elements in an array with a static value.