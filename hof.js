// Higher Order Functions
//
// Built-in HOF
//
// for Each: Takes an array and for each element in the arry, pass that element into a callback Function

var vietnameseFoods = ["Pho", "Dong Khan", "Bahn Mi", "Bun", "Boba Tea"];

// Recreate ForEach as a function
function forEach(arr, fn){
  // for loop to loop through the elements in the array
  for(i=0; i<arr.length; i++){
    // call the function
    fn(arr[i],i,arr);
  }
}

// Call function similarly to above
forEach(vietnameseFoods,function(element,i,arr){
  console.log("element is ", element);
  // Returns each element as i is looped
  console.log("index is ", i);
  // REturns the associated index
  console.log("array is ", arr);
  // Returns the array vietnameseFoods
});

// filter: takes an array and a callback function that will be called for each element.
// If the callback function turns truthy, keep the element; otherwise, don't.

//filter function
function filter(arr,fn){
  //Create empty array
  var newArray = [];
  //Loop through each element in the array
  for(i=0; i<arr.length; i++){
    // If the function fn is true...
    // Calls the function using newArray = filter(...) & looks at that if statement
    // If the function returns true...
    if(fn(arr[i],i,arr)){
      // Push the element into newArray
      newArray.push(arr[i]);
    }
  }
  // Return newArray with all of the elements pushed in
  return newArray;
}

// This function calls the filter function defined above with the input vietnameseFoods
var newArray = filter(vietnameseFoods,function(element, i, arr){
  // This if statement can be replaced
  //It checks for truthy and falsy
  // If true, just return true, which is then input back into the function filter to push the element into the array
  if(element[0] === "B"){
      return true;
  }
});

console.log(newArray);
//
//
// Map
//
var pets = ["dog", "cat", "bird"];

function map(arr,fn){
  var newArray1 = [];
  for(i=0; i<arr.length; i++){
    fn(arr[i],i,arr);
    newArray1.push(arr[i]);
  }
  return newArray1;
}

var newArray1 = map(pets, function(element, i, arr){
    arr[i] = arr[i] + "s";
});

console.log(newArray1);

// Reduce
var numbers = [0,1,2,3];

function reduce(arr,fn){
  var accum = 0;
  for(var i=0; i<arr.length; i++){
    accum = fn(accum,arr[i],i,arr);
  }
  return accum;
}

var total = reduce(numbers, function(accum, current, i, arr){
  return accum + current;
});

console.log(total);

// for the reduce function, if nothing is passed in, it starts at 1. If a 0 is passed it in, it starts at 0, etc.
