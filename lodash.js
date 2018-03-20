var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  if (n == undefined) {
    n = 1;
  }
  let neuRay = [];
  for(let i = 0; i < n; i++){
    neuRay.push(array[i])
  }
  return neuRay;
};

// lReturns the last element of an array.
_.last = function(array) {
	return array[array.length - 1];
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  let arrayIndexLength = array.length - 1, neuRay = [];
	if (n === undefined) {
    n = 1;
  }

  for (let i = array.length - n; i <= arrayIndexLength; i++){
    neuRay.push(array[i])
  }
  return neuRay;
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  let neuRay = [];
	for(let i in array){
    if(array[i] != false && array[i] != undefined && typeof array[i] != 'number'){
      neuRay.push(array[i])
    }
    if(typeof array[i] == 'number' && array[i] > 0 ) {
      neuRay.push(array[i])
    }
  }
  return neuRay;
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	let neuRay = [];
  for (let i in arrayOne) {
    if(arrayTwo.includes(arrayOne[i]) == false){
      neuRay.push(arrayOne[i])
    }
  }
  return neuRay;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
	let minimumValue = Infinity;
  for (let i in array) {
    if(array[i] < minimumValue) {
      minimumValue = array[i];
    }
  }
  return minimumValue;
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
	let maximumValue = 0;
  for (let i in array) {
    if (array[i] > maximumValue) {
      maximumValue = array[i];
    }
  }
  return maximumValue;
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  let matchingIndex;
  if(array.includes(el) === true) {
    for(let i in array) {
      if(array[i] == el){
        matchingIndex = i;
      }
    }
  } else {
    matchingIndex = -1;
  }
  return matchingIndex;
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
	
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	// Place your solution here
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	// Place your solution here
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
