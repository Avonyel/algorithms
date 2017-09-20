/*
	10. Summation of Primes
 */

const isPrime = n => {
	if (n < 2) {
		return false;
	}

	if (n < 4) {
		return true;
	}

	let sqr = Math.sqrt(n);

	for (let i = 2; i <= sqr; i++) {
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
			sum += i;
		}
	}

	return sum;
};

// console.log(primeSums(20));
console.log(primeSums(2000000));
