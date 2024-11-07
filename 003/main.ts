function isPrime(n: number, knownPrimes: number[]): boolean {
    if (n == 2) {
        return true
    }

    for (const prime of knownPrimes) {
        if (n % prime == 0) {
            return false
        }
    }

    return true
}

function* primes() {
    yield 2

    const knownPrimes: number[] = [2]
    let currentNumber = 3

    while (true) {
        if (isPrime(currentNumber, knownPrimes)) {
            knownPrimes.push(currentNumber)
            yield currentNumber
        }

        currentNumber += 1
    }
}

function primeFactors(n: number): number[] {
    for (const prime of primes()) {
        if (prime > n) {
            break
        }

        if (n % prime === 0) {
            return [prime, ...primeFactors(n / prime)]
        }
    }

    return []
}

function largestPrimeFactor(n: number): number {
    return Math.max(...primeFactors(n)) //?
}

largestPrimeFactor(600851475143) //?
