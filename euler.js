/*
	10. Summation of Primes
 */

const isPrime = n => {
	if (n < 2) {
		return false;
	}

	let sqr = Math.sqrt(n);

	for (let i = 2; i < sqr; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
};

const primeSums = n => {
	let sum = 0;

	for (let i = 2; i < n; i++) {
		if (isPrime(i)) {
			// console.log(i, 'is prime number');
			sum += i;
		}
	}

	return sum;
};

// console.log(primeSums(20));
console.log(primeSums(10));
