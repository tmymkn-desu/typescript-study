export {};

let numbers: number[] = [1,2,3];

let numbers2: Array<number> = [1,2,3];

let strings2: Array<string> = ["Tokyo", 'Osaka'];

let strings: string[] = ["A", "B", "C"];

let nijigenHairetsu: number[][] = [[1,2],[3,4]];

let hairetsu: (string | number | boolean)[] = [1, false, 'A']

console.log({numbers, numbers2, strings, strings2, nijigenHairetsu})