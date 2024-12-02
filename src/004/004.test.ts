import { assertEquals } from "jsr:@std/assert";

import { isPalindromicNumber } from "./004.ts";

Deno.test("single digits are palindromic numbers", () => {
    const result = isPalindromicNumber(1)
    assertEquals(result, true);
});

Deno.test("12 is not a palindromic number", () => {
    const result = isPalindromicNumber(12)
    assertEquals(result, false);
});

Deno.test("79 is not a palindromic number", () => {
    const result = isPalindromicNumber(79)
    assertEquals(result, false);
});


Deno.test("88 is a palindromic number", () => {
    const result = isPalindromicNumber(88)
    assertEquals(result, true);
});

Deno.test("8741478 is a palindromic number", () => {
    const result = isPalindromicNumber(8741478)
    assertEquals(result, true);
});

