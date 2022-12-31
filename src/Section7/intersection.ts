export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Tom: Pitcher1 = {
  throwingSpeed: 132
};

const Ku: Batter1 = {
  // throwingSpeed: 154,
  battingAverage: 12
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  battingAverage:12,
  throwingSpeed:12
}