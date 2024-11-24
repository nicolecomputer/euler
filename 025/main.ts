import { fibonachi } from "../util/sequence/fibonachi.ts";
import { takeUntil } from "../util/functional.ts";

function main() {
    const result = takeUntil(
        fibonachi(),
        n => n.toString().length === 1000)
        .length + 1

    console.log(result)
}

main();
