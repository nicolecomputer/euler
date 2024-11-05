function isDivisble(divisor: number): (number) => boolean {
    return (num: number) => {
        return num % divisor == 0
    }
}

function isDivisibleByAny(...divisors: number[]): (number) => boolean {
    return (num: number) => {
        for (let divisor of divisors) {
            if (isDivisble(divisor)(num)) {
                return true
            }
        }
        return false
    }
}

function range(start: number, end: number): number[] {
    if (start >= end) {
        return []
    }

    let nums: number[] = []
    for (let i = start; i <= end; i++) {
        nums.push(i)
    }
    return nums
}

function sum(n: number, total: number | undefined): number {
    return (total || 0) + n
}

function main() {
    const input = Deno.args[0];
    const maxNumber = Number.parseInt(input);

    if (!maxNumber) {
        console.log("failed to parse number", input)
        return -1
    }

    const result = range(1, maxNumber)
        .filter(isDivisibleByAny(3, 5))
        .reduce(sum)

    console.log(result)
}

main()
