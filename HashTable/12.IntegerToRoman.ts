function intToRoman(num: number): string {
    const symbols: { [key: number]: string } = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    };
    let result = ''
    while (num > 0) {
        for (const value of Object.keys(symbols).map(Number).sort((a, b) => b - a)) {
            if (value <= num) {
                result += symbols[value].repeat(Math.floor(num / value));
                num -= value * Math.floor(num / value);
                break;
            }
        }
    }
    return result
};

console.log(intToRoman(123))