/*
  input : an array of numbers [1,2,3,4,5]
  target : a number
  output : returns the indices of pairs whose sum is equal to the target
*/

let input = [2, 7, 3, 15, 6, 3]; // Input array
let target = 9; // target number

// Approach-1
const findPairs = (input, target) => {
	let pairs = []; // array to store the pairs
	for (let i = 0; i < input.length; i++) {
		// loop through the input array
		for (let j = i + 1; j < input.length; j++) {
			if (input[i] + input[j] === target) {
				// if sum of two equals target and push in the pairs
				pairs.push([i, j]);
			}
		}
	}
	return pairs; // return the indices
};

/*
  time complexity: n*n = O(n^2)
*/

console.log(findPairs(input, target));


