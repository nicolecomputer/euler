function range(start: number, end: number): number[] {
    if (start > end) {
        return []
    }

    const length = end - start + 1;

    return [
        ...new Array(length).keys()
    ].map(i => i + start)
}


function sum(n: number, total: number | undefined): number {
    return (total || 0) + n
}

function square(n: number): number {
    return Math.pow(n, 2)
}

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

function difference<T>(fn1: (args: T) => number, fn2: (args: T) => number, args: T): number {
    return fn1(args) - fn2(args)
}

function main() {
    const result = difference(
        squareOfSum, sumOfSquares,
        { start: 1, end: 10 }) //?
    console.log(result)
}

main();
