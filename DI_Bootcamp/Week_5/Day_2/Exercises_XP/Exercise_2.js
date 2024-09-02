const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let suffix = ordinal[(index + 1) % 10] || ordinal[0];
  if (index + 1 === 11 || index + 1 === 12 || index + 1 === 13) {
    suffix = ordinal[0];
  }
  console.log(`${index + 1}${suffix} choice is ${color}.`);
});
