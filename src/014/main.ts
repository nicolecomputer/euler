import { isEven } from "../util/util.ts";

function* collatz(start: number): Generator<number> {
  yield start

  let current = start;

  while (current > 1) {
    let next: number;
    if (isEven(current)) {
      next = current / 2
    } else {
      next = 3 * current + 1
    }
    yield next;

    current = next;
  }
}

function takeAll<T>(g: Generator<T>): T[] {
  const all: T[] = [];
  for (const val of g) {
    all.push(val)
  }

  return all
}

function main() {
  let biggestLength = 0;
  let biggestValue = 0;

  for (let i = 1; i < 1_000_000; i++) {
    const chain = takeAll(collatz(i));
    if (chain.length > biggestLength) {
      biggestLength = chain.length;
      biggestValue = i
    }
  }

  console.log(biggestValue, biggestLength)
}

main();
