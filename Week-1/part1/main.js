/*
  input : an array of numbers [1,2,3,4,5]
  target : a number
  output : returns the indices of pairs whose sum is equal to the target
*/

let input = [2,7,11,15,6,3,4.5,4.5]; // Input array
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

// Approach-2
function findPairsTwo(input, target) {
	let pairs = []; // array to store the pairs
	let remain = 0; // number should find in input array
	// loop through the input array
	for (let i = 0; i < input.length; i++) {
		// target - a = b
		remain = target - input[i];
		// if there is a number
		if (input.indexOf(remain) !== -1) {
      // if index of remain is not equal to current index
			if (i !== input.indexOf(remain)) {
        // push the indices to pairs
				pairs.push([i, input.indexOf(remain)]);
      } else {
        // otherwise find the last index of number
				pairs.push([input.indexOf(input[i]), input.lastIndexOf(input[i])]);
			}
		}
	}
	return pairs;
}
/*
  time complexity: n times loop ==> O(n)
*/

/*
  Issue: the second approach returns indeces two times ??
*/

console.log(findPairsTwo(input, target));
