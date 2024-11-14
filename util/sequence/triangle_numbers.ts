export function triangleNumber(n: number): number {
    return n * (n + 1) / 2
}

export function* triangleNumbers() {
    let i = 1;
    while (true) {
        yield triangleNumber(i)
        i += 1
    }
}
