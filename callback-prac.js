function foo() {
	function bar() {
		//console.log("bing");
		return "bing"
	}
	return bar();
}
console.log(foo());
///////////////////////////////////
function cbPrac(num1, num2, cb) {
	if (cb === undefined) {
		return num1 + num2;
	}
	return cb(num1, num2);
}
// callback func
function twoMul(num1, num2) {
	return (num1 * num2);
}
function subTwo(num1, num2) {
	return (num1 - num2)
}

console.log(cbPrac(2,5,twoMul));
console.log(cbPrac(2,5))
/////////////////////////////////
// Writing own forEach, map, filter, and every function

let trees = ["oak", "pine", "birch"];

function myForEach(arr, cb) {
	//iterates through array
	for (let i = 0; i < arr.length; i++) {
		//el is each element at that index
		let el = arr[i];
		//calls the callback function on el, i and arr
		cb(el, i, arr);
	}
}

myForEach(trees, function(el, i, arr) {
	//logs element and index from cats array, ignores the arr param.
	console.log(el + " is at index " + i);
});

function myMap(arr, cb) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let el = arr[i];
		//callback on current element, index, and array that get
		//pushed to newArr
		newArr.push(cb(el, i, arr));
	}
	return newArr;
}

let upperTrees = myMap(trees, function(el){
	return el.toUpperCase();
});
console.log(upperTrees);

function myFilter(arr, cb) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let el = arr[i];
		// if callback returns true then push current element to newArr
		if (cb(el, i, arr)) {
			newArr.push(el);
		}
	}
	return newArr;
}

let filteredTrees = myFilter(trees, function(el) {
	// returns true if element includes 'o'
	return el.includes('o');
}) // ['oak']
console.log(filteredTrees);

function myEvery(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		let el = arr[i];
		// if callback returns false the exit loop and return false
		if (cb(el, i, arr) === false) {
			return false
		}
	}
	// return true if all elements met condition
	return true;
}

let everyBool = myEvery(trees, function(el) {
	return el.includes('a');
})
console.log(everyBool)
