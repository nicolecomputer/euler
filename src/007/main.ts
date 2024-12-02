import { primes } from "../util/sequence/prime.ts"
import { nthElement } from "../util/functional.ts";

function main() {
    nthElement(primes(), 10_001)
}

main();
