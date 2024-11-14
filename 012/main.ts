import { triangleNumbers } from "../util/sequence/triangle_numbers.ts";
import { divisors } from "../util/util.ts";

console.log(
    triangleNumbers()
        .find(n => divisors(n).length > 500)
)
