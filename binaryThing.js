// const binaryThing = (n, left ="", right = "") => {
// 	if (n === 1) {
// 		return "1"
// 	}
// };

// // from 1 up to half of n (i)

// // make a list of all permutations with i 1's in them
const output = [];
let arr = Array(3).fill('0');

// ["0", "0", "0"]

for (let i = 0; i < arr.length; i++) {
	let newArr = arr.map((el, index) => {
		return index === i ? '1' : el;
	});

	let string = newArr.join('');
	output.push(string);
	// console.log(string);
}

// "100",
// "010",
// "001"

//1
// console.log(["1"]);

// //2
// console.log(["11"]);

// //3
// console.log(["101", "111"])

// //4
// console.log(["1001", "1010", "1111"])

// const output = [
// 		100001,
// 		100010,
// 		100100,
// 		110110,
// 		110101,
// 		110011,
// 		101110,
// 		101101,
// 		101011,
// 		111111
// 	];

const equal = (n, left = '', right = '', di = 0) => {
	console.log(n, 'number', left, 'left', right, 'right', di, 'di');
	if (n == 0) {
		// If difference between counts of 1s and
		// 0s is 0 (di is 0)
		if (di == 0) {
			console.log(left + right);
		}

		return;
	}

	/* If 1 remains than string length was odd */
	if (n == 1) {
		// If difference is 0, we can put remaining
		// bit in middle.
		if (di == 0) {
			console.log(left + '0' + right);
			console.log(left + '1' + right);
		}
		return;
	}

	/* If difference is more than what can be
       be covered with remaining n digits
       (Note that lengths of left and right
        must be same) */
	if (2 * Math.abs(di) <= n) {
		/*binary number would not start with 0*/
		if (left != '') {
			/* add 0 to end in both left and right
               half. Sum in both half will not
               change*/
			equal(n - 2, left + '0', right + '0', di);

			/* add 0 to end in both left and right
              half* subtract 1 from di as right
              sum is increased by 1*/
			equal(n - 2, left + '0', right + '1', di - 1);
		}

		/* add 1  in end in left half and 0 to the
          right half. Add 1 to di as left sum is
          increased by 1*/
		equal(n - 2, left + '1', right + '0', di + 1);

		/* add 1 in end to both left and right
          half the sum will not change*/
		equal(n - 2, left + '1', right + '1', di);
	}
};

const binaryLoop = n => {
	// (n >>> 0).toString(2);
	let arr = new Array(n).fill('1').join('');
	let count = parseInt(arr, 2);
	console.log(count);
	// for (let i = 0; i < )
};

binaryLoop(7);

// console.log(equal(6));
/*
6 'number' '' 'left' '' 'right' 0 'di'
4 'number' '1' 'left' '0' 'right' 1 'di' // equal(n - 2, left + '1', right + '1', di);
2 'number' '10' 'left' '00' 'right' 1 'di'
0 'number' '100' 'left' '000' 'right' 1 'di'
0 'number' '100' 'left' '001' 'right' 0 'di'
100001

0 'number' '101' 'left' '000' 'right' 2 'di'
0 'number' '101' 'left' '001' 'right' 1 'di'
2 'number' '10' 'left' '01' 'right' 0 'di'
0 'number' '100' 'left' '010' 'right' 0 'di'
100010

0 'number' '100' 'left' '011' 'right' -1 'di'
0 'number' '101' 'left' '010' 'right' 1 'di'
0 'number' '101' 'left' '011' 'right' 0 'di'
101011

2 'number' '11' 'left' '00' 'right' 2 'di'
2 'number' '11' 'left' '01' 'right' 1 'di'
0 'number' '110' 'left' '010' 'right' 1 'di'
0 'number' '110' 'left' '011' 'right' 0 'di'
110011

0 'number' '111' 'left' '010' 'right' 2 'di'
0 'number' '111' 'left' '011' 'right' 1 'di'
4 'number' '1' 'left' '1' 'right' 0 'di'
2 'number' '10' 'left' '10' 'right' 0 'di'
0 'number' '100' 'left' '100' 'right' 0 'di'
100100

0 'number' '100' 'left' '101' 'right' -1 'di'
0 'number' '101' 'left' '100' 'right' 1 'di'
0 'number' '101' 'left' '101' 'right' 0 'di'
101101

2 'number' '10' 'left' '11' 'right' -1 'di'
0 'number' '100' 'left' '110' 'right' -1 'di'
0 'number' '100' 'left' '111' 'right' -2 'di'
0 'number' '101' 'left' '110' 'right' 0 'di'
101110

0 'number' '101' 'left' '111' 'right' -1 'di'
2 'number' '11' 'left' '10' 'right' 1 'di'
0 'number' '110' 'left' '100' 'right' 1 'di'
0 'number' '110' 'left' '101' 'right' 0 'di'
110101

0 'number' '111' 'left' '100' 'right' 2 'di'
0 'number' '111' 'left' '101' 'right' 1 'di'
2 'number' '11' 'left' '11' 'right' 0 'di'
0 'number' '110' 'left' '110' 'right' 0 'di'
110110

0 'number' '110' 'left' '111' 'right' -1 'di'
0 'number' '111' 'left' '110' 'right' 1 'di'
0 'number' '111' 'left' '111' 'right' 0 'di'
111111
*/
