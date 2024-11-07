function* fibonachi() {
    yield 1
    yield 2

    let prev = 1
    let current = 2
    while (true) {
        const next = current + prev
        prev = current
        current = next
        yield current
    }
}

function allFibonacciLessThan(num: number): number[] {
    const result: number[] = []

    for (const next of fibonachi()) {
        if (next > num) {
            return result
        }
        result.push(next)
    }

    // This will never occur
    return []
}

function isEven(n: number): boolean {
    return n % 2 === 0
}

function sum(n: number, sum: number | undefined): number {
    return (sum || 0) + n
}

function main() {
    const result = allFibonacciLessThan(4_000_000)
        .filter(isEven)
        .reduce(sum)

    console.log(result)
}

main()
