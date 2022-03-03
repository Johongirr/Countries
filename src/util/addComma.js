const addCommaToNumbers = (num) => {
  if (num.length < 4) return num;
  let comma = "";
  let index = num.length - 1;
  for (let i = num.length - 1; i >= 0; i -= 3) {
    console.log(num[index]);
    index -= 3;
  }
  return comma;
};

console.log(addCommaToNumbers("1234"));
