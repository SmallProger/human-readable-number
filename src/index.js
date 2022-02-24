module.exports = function toReadable(number) {
    let result = [];
    const specialNumbers_part1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const specialNumbers_part2 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const specialNumbers_part3 = ["hundred", "thousand"];
    let i = 1;
    const str = String(number);
    const length = String(number).length;
    if (length == 1) return specialNumbers_part1[number];
    while (i <= length) {
        if (i == 1 && number % 10 != 0)
            result.push(specialNumbers_part1[number % 10]);
        if (i == 2 && number % 100 > 9 && number % 100 < 20) {
            //12, 13, 15, 16, 17
            result[0] = specialNumbers_part1[number % 100];
        } else if (i == 2 && number % 100 >= 20) {
            result.push(
                specialNumbers_part2[Math.floor((number % 100) / 10) - 2]
            );
        }
        if (i == 3 && number % 1000 != 0) {
            result.push(
                `${specialNumbers_part1[Math.floor(number / 100)]} ${
                    specialNumbers_part3[0]
                }`
            );
        }
        i++;
    }
    if (result.length == 1) {
        return result[0];
    } else if (number % 100 > 10 && number % 100 < 20) {
        return `${result[1]} ${result[0]}`;
    } else if (result.length == 2) {
        return `${result[1]} ${result[0]}`;
    }
    return `${result[2]} ${result[1]} ${result[0]}`;
};
