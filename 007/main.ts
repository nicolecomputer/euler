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

function nthElement<T, TReturn, TNext>(generator: Generator<T, TReturn, TNext | undefined>, n: number): T | undefined {
    let index = 1;

    for (const val of generator) {
        if (index === n) {
            return val
        }
        index += 1
    }

    return undefined
}

function main() {
    nthElement(primes(), 10_001)
}

main();
