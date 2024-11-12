export function takeUntil<T>(g: Generator<T>, condition: (t: T) => boolean): T[] {
    const result: T[] = [];
    for (const r of g) {
        if (condition(r)) {
            break
        }
        result.push(r)
    }
    return result
}

export function nthElement<T, TReturn, TNext>(generator: Generator<T, TReturn, TNext | undefined>, n: number): T | undefined {
    let index = 1;

    for (const val of generator) {
        if (index === n) {
            return val
        }
        index += 1
    }

    return undefined
}

export function differenceOfFns<T>(fn1: (args: T) => number, fn2: (args: T) => number, args: T): number {
    return fn1(args) - fn2(args)
}
