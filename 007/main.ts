import { primes } from "../util/prime.ts"
import { nthElement } from "../util/functional.ts";

function main() {
    nthElement(primes(), 10_001)
}

main();
