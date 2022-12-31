export {};

let bmi:  (height: number, weight: number) => number = (height:number, weight:number):number =>  weight / (height * height);

console.log(bmi(1.78, 860));

const nijo = (a:number): number => {
  return a * a
};
console.log(nijo(2));