// 1. Differences between mutating array methods and non-mutation array methods in JavaScript

// Mutating array methods in JavaScript are methods that basically changes the array itself instead of returning 
// a new array with the new changes whereas Non-Mutation array methods returns a whole new array which has all the changes.

// Examples of mutating array methods are; array.fill(), array.pop(), array.push(), array.reverse(), array.shift(), array.sort(), array.splice() and array.unshift().
// Examples of non-mutating array methods are; array.concat(), array.includes(), array.indexOf, array.join(), array.lastIndexOf, array.slice(), array.toString() 

// 2. array of languages
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
console.log(languages);

// (i) Add ‘Kotlin’ to the end of the array
languages.push('kotlin');
console.log(languages);

// (ii) Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages);

// (iii) Remove the first item in the array
languages.shift();
console.log(languages);

// (iv) Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages);

// (v) Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

// 3. What will be the value of fruit after calling the function changeFruit?

let fruit = ['apple', 'mango', 'banana'];

		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
//changeFruit(fruit);
console.log(changeFruit(fruit));

// The value of fruit will be [ 'apple', 'mango', 'orange' ]

// 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.

function maximum(number) {
	let max = number[0];
	for(i = 0; i < number.length; i++) {
		if (number[i] > max)
		max = number[i];
	}
	return max;
}

let number = [2, 4, 12, -1];
let maximumNumber = maximum(number);

console.log(maximumNumber);


// 5. Write a function called valTimesIndex which accepts an array of numbers 
// and returns a new array with each value multiplied by the index it is at in the array

function valTimesIndex(arrays1){
	return arrays1.map(function(value,index){
	  return value*index;
  });  
 }

 let indexNumber = valTimesIndex([2,5,8])
 console.log(indexNumber);