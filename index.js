// 1
const onlymale = (peoples) => {
  let allarry = peoples.filter((person) => person.gender !== "female");
  const remingpeople = allarry.map((person) => person.name);
  return remingpeople;
};

// 2
const BookTitle = (Books) => {
  const onlyTitle = Books.map((book) => book.title);
  return onlyTitle;
};

// 3

const SquareNumber = (x) => {
  return x * x;
};
const DoubleNumber = (x) => {
  return 2 * x;
};
const Add5Number = (x) => {
  return x + 5;
};

const result = (x) => {
  const Square = SquareNumber(x);
  const Double = DoubleNumber(Square);
  const Add5 = Add5Number(Double);
  return Add5;
};

// 4
const sortcarbyyear = (cars) => {
  const sortcarbyyear = cars.sort((x, y) => x.year - y.year);
  return sortcarbyyear;
};

// 5

const updateAgeByName = (Arrry, name, newage) => {
  const findperson = Arrry.find((person) => person.name === name);
  if (findperson) {
    findperson.age = newage;
  } else {
    console.log(`Person ${name} not found`);
  }
  return Arrry;
};
