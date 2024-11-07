function square(n: number): number {
    return Math.pow(n, 2)
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
    range(1, 10) //?
}

main();
