export function isPalindromicNumber(n: number): boolean {
    const str = n.toString()
    const length = str.length;

    if (length == 1) {
        return true
    }

    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false
        }
    }
    return true
}

function largestNumberForDigits(n: number): number {
    if (n <= 0) {
        return 0
    }

    return Math.pow(10, n) - 1
}

function smallestNumberForDigits(n: number): number {
    if (n <= 0) {
        return 0
    }

    return Math.pow(10, n - 1)
}

function largestPalindromeForDigits(digits: number): number | undefined {
    const starting = largestNumberForDigits(digits);
    const ending = smallestNumberForDigits(digits)

    const palindromes: number[] = []
    for (let firstFactor = starting; firstFactor >= ending; firstFactor -= 1) {
        for (let secondFactor = starting; secondFactor >= ending; secondFactor -= 1) {
            const result = firstFactor * secondFactor
            if (isPalindromicNumber(result)) {
                palindromes.push(result)
            }
        }
    }

    return Math.max(...palindromes)
}

export function main() {
    console.log("largest 2 digit", largestPalindromeForDigits(2));
    console.log("largest 3 digit", largestPalindromeForDigits(3))
}
