export function* fibonachi() {
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
