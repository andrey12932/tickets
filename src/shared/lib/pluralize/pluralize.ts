export const pluralize = (number: number, words: string[]) => words[
// eslint-disable-next-line eqeqeq
// eslint-disable-next-line no-nested-ternary
    number % 10 === 1 && number % 100 !== 11
        ? 0
        : number % 10 >= 2 &&
        number % 10 <= 4 &&
        (number % 100 < 10 || number % 100 >= 20)
            ? 1
            : 2
    ];