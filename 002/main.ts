import { sum } from "../util/util.ts"
import { isEven } from "../util/util.ts"
import { fibonachi } from "../util/sequence/fibonachi.ts"
import { takeUntil } from "../util/functional.ts"

function main() {
    const a = takeUntil(fibonachi(), n => n > 4_000_000)
        .filter(isEven)
        .reduce(sum)
    console.log(a)
}

main()
