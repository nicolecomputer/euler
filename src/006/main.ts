import { range } from "../util/util.ts"
import { sum, square } from "../util/util.ts"
import { differenceOfFns } from "../util/functional.ts"

type Range = {
    start: number,
    end: number
}

function squareOfSum(r: Range): number {
    return square(range(r.start, r.end).reduce(sum))
}

function sumOfSquares(r: Range): number {
    return range(r.start, r.end).map(square).reduce(sum)
}

function main() {
    const result = differenceOfFns(
        squareOfSum, sumOfSquares,
        { start: 1, end: 10 }) //?
    console.log(result)
}

main();
