var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    var k = [];
    if(n === undefined){return array[0];}
      else{
        for (var i = 0; i < n; i++) {
        k.push(array[i]);
      }
    }
    return k;
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    var k = [];
    if(n === undefined){return array[array.length-1];}
    else if(n === 0){return;}
    else if(n >= array.length){return array;}
      else{
        for (var i = array.length-1; i >= array.length - (n); i--) {
          k.unshift(array[i]);
      }
    }
    return k;
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var k = [];
    array.forEach(
      function(elem){
        if(k.indexOf(elem)==-1){
          k.push(elem);
        }
      }
    );
    return k;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    k = [];
    array.forEach(
      function(elem){
        k.push(elem[key]);
      }
    );
    return k;

  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    var k = false;
    array.forEach(
      function(elem){
        if(elem === target){
          k = true;
        }
      }
    );
    return k;
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    returnArray = [];
    array.forEach(
      function(elem){
        if(Array.isArray(elem)){
          returnArray = returnArray.concat(myFunctions.flatten(elem));
        }else{
          returnArray.push(elem);
        }
      }
    );
    return returnArray;
  }
};
module.exports = myFunctions;
