import { primes } from "../util/sequence/prime.ts"

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
