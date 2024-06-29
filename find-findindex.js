/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

//How can I write a function that accepts an array of objects each containing a key of username, and accepts a string, returns the first object with the key of username that matches the string passed to the function, and returns undefined if not found.

//usersArray.find. if val.username === true, return val, else return undefined.

//should accept an array of objects and return the first object that contains a property value of passed in string.

//returns

function findUserByUsername(usersArray, string) {
	return usersArray.find(function(val) {
		if (val[`username`] === string) {
			return val;
		}
	});
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

//Use usersArray.findIndex. if usersArray[`username`] !== username, return undefined. else return usersArray[findIndex]

function removeUser(usersArray, username) {
	let found = usersArray.findIndex(function(obj) {
		if (obj[`username`] === username) {
			usersArray.splice(usersArray.indexOf(obj), 1);
			return true;
		} else {
			return -1;
		}
	});
	if (found === -1) {
		return undefined;
	} else {
		return usersArray[found];
	}
}

//hypothesis 1 :save the first instance of (usersArray[`username`] === username) being true to a variable. if variable is equal to -1, return undefinced. If that is true, splice usersArray() at that index of the true instance.

//Hypothesis 2 : FindIndex: Iterates through an array, and returns index of value where callback function returns true. Returns -1 if callback function never returns true for any value in the array.

//What needs to be true? The object with a key of username should equal the passed in string. If that is true, remove that object from the array. To remove that object from the array, I need that objects index, and use that index with splice to remove it. Finally, return that object. Otherwise return undefined.

//This is my second attempt.
//It works!!
function removeUser(userArray, string) {
	let empty = {};
	let foundObjIndex = userArray.findIndex(function(obj) {
		if (obj[`username`] === string) {
			return true;
		}
	});
	if (foundObjIndex !== -1) {
		userArray.splice(foundObjIndex, 1);
		empty[`username`] = string;
		return empty;
	}
	if (foundObjIndex === -1) {
		return undefined;
	}
}
