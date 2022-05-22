function problemSolved() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let ganjil = [];
  let genap = [];

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      genap.push(number[i]);
    } else {
      ganjil.push(number[i]);
    }
  }
  console.log(result = [ganjil, genap]);
}
problemSolved();
