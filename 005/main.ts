function isDivisibleByEveryNumber(n: number, divisors: number[]): boolean {
    for (const divisor of divisors) {
        if (n % divisor !== 0) {
            return false
        }
    }

    return true
}

function range(start: number, end: number): number[] {
    if (start > end) {
        return []
    }

    const length = end - start + 1;

    return [
        ...new Array(length).keys()
    ].map(i => i + start)
}

function main() {
    const divisors = range(1, 20).reverse()

    let i = 1;
    while (true) {
        if (i > 1_000_000_000) {
            break
        }

        if (isDivisibleByEveryNumber(i, divisors)) {
            console.log(i)
            break;
        }

        i += 1
    }
}

main()
