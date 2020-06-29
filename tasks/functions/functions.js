/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
	return a + b;
}

/**
 * write function that return first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object) {
	let name = '';
	for (let key in object) {
		name += object[key] + ' ';
	}
	let name2 = name.substring(0, name.length - 1);
	return name2;
}


function getFullName2(object) {
	let fullName = Object.values(object).join(' ');
	return fullName;
}


/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	if (n % 2 != 0) {
		return true;
	} else {
		return false;
	}
}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {

	let shortestLenght = wordArray[0].length;
	let shortestElement = wordArray[0];

	for (let i = 1; i < wordArray.length; i++) {
		if (shortestLenght > wordArray[i].length) {
			shortestLenght = wordArray[i].length;
			shortestElement = wordArray[i];
		}
	}
	return shortestElement;
}

/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */
function getGoogle(n) {
	let word = ['g', '', 'gle'];

	for (let i = 0; i < n; i++) {
		word[1] += 'o';
	}
	return word.join('');
}

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */
function getUser(firstName, lastName, age) {
	const user = {
		firstName: firstName || null,
		lastName: lastName || null,
		age: age || null,
	}
	return user;
}
/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

//  function getTotalPath(path) {
// 	var distanceTotal = 0;
// 	for (let key of path) {
// 		distanceTotal += path[key].distance;
// 	}
// 	return distanceTotal;
// }

function getTotalPath(path) {
	let dis = 0;
	for (let i = 0; i < path.length; i++) {
		dis += path[i].distance;
	}
	return dis;
}


/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {percentage} num 
 * @param {Function <number>} num 
 */

function discountFunction(percentage) {
	return function (number) {
		return (number - (number * percentage / 100));
	};
}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		console.log(Object.keys(myObject));
	},
	call() {
		console.log('My name is ' + myObject.name + ' ' + myObject.lastName + ' and I am ' + myObject.age + ' years old. My best friend is ' + myObject.friends[2]);
	}

};


module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};