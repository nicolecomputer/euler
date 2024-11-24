export function* fibonachi(): Generator<bigint> {
    let prev = 0n
    let current = 1n

    while (true) {
        yield current
        const next = current + prev
        prev = current
        current = next
    }
}
