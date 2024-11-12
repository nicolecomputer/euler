export function isPrime(n: number, knownPrimes: number[]): boolean {
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

export function* primes(startingNum: number = 3) {
    yield 2

    const knownPrimes: number[] = [2]
    let currentNumber = startingNum

    while (true) {
        if (isPrime(currentNumber, knownPrimes)) {
            knownPrimes.push(currentNumber)
            yield currentNumber
        }

        currentNumber += 1
    }
}
