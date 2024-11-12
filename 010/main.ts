import { primes } from "../util/prime.ts";
import { takeUntil } from "../util/functional.ts";
import { sum } from "../util/util.ts";

function main() {
    const result = takeUntil(primes(), (n) => n > 2_000_000)
        .reduce(sum)
    console.log(result) //?
}

main();
