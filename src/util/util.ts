
export function sum(n: number, sum?: number): number;
export function sum(n: bigint, sum?: bigint): bigint;
export function sum(n: number | bigint, sum: number | bigint = 0): number | bigint {
    if (typeof n === 'bigint') {
        return n + (typeof sum === 'bigint' ? sum : BigInt(sum));
    }
    return (n as number) + (sum as number);
}

export function product(digit: number, product: number = 1): number {
    return digit * product
}

export function square(n: number): number {
    return Math.pow(n, 2)
}

export function isEven(n: number): boolean;
export function isEven(n: bigint): boolean;
export function isEven(n: number | bigint): boolean {
    if (typeof n === 'bigint') {
        return n % BigInt(2) === BigInt(0);
    }
    return n % 2 === 0;
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

export function divisors(n: number): number[] {
    if (n === 1) {
        return [1]
    }

    const result: number[] = [];

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i)
            result.push(n / i)
        }
    }

    return result;
}
