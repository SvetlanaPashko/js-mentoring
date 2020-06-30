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

// function getFullName2(object) {
// 	let fullName = Object.values(object).join(' ');
// 	return fullName;
// }

function getFullName(object) {
	let fullName = object.firstName + ' ' + object.lastName;
	return fullName;
}


/**
 * write fuction that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	return (n % 2 != 0);
}

/**
 * write function that return shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */
function getShortest(wordArray) {

	let shortestElement = wordArray[0];

	for (let i = 1; i < wordArray.length; i++) {
		if (shortestElement.length > wordArray[i].length) {
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
		const allKeys = Object.keys(myObject);
		for (let key in allKeys) {
			console.log(allKeys[key]);
		}
	},
	call() {
		return ('My name is ' + this.name + ' ' + this.lastName + ' and I am ' + this.age + ' years old. My best friend is ' + this.friends[2]);
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