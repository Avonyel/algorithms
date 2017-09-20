// const binaryThing = (n, left ="", right = "") => {
// 	if (n === 1) {
// 		return "1"
// 	}
// };

// // from 1 up to half of n (i)

// // make a list of all permutations with i 1's in them
const output = [];
let arr = Array(3).fill("0");

// ["0", "0", "0"]

for (let i = 0; i < arr.length; i++) {
	let newArr = arr.map((el, index) => {
		return index === i ? "1" : el;
	});

	let string = newArr.join("");
	output.push(string);
	console.log(string);
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
