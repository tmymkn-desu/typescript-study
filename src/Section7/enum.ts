export {};

enum Months {
  January = 1,
  Febrary,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January)
console.log(Months.Febrary)
console.log(Months.December)


enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  BLACK =  '#000000'
}

let red = COLORS.RED
console.log({red})

enum COLORS {
  BLUE = '#123456'
}

console.log(COLORS)
console.log(COLORS.BLACK)
