
export function sum(n: number, sum: number = 0): number {
    return sum + n
}

export function product(digit: number, product: number = 1): number {
    return digit * product
}

export function square(n: number): number {
    return Math.pow(n, 2)
}

export function isEven(n: number): boolean {
    return n % 2 === 0
}

export function range(start: number, end: number): number[] {
    if (start > end) {
        return []
    }

    const length = end - start + 1;

    return [
        ...new Array(length).keys()
    ].map(i => i + start)
}
