import { sum, range } from "../util/util.ts"

function isDivisble(divisor: number): (number: number) => boolean {
    return (num: number) => {
        return num % divisor == 0
    }
}

function isDivisibleByAny(...divisors: number[]): (number: number) => boolean {
    return (num: number) => {
        for (const divisor of divisors) {
            if (isDivisble(divisor)(num)) {
                return true
            }
        }
        return false
    }
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
