//given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

const slidingMaximum = (array, k) => {
  let maxArray = [];
  while (arrayGiven.length > 2) {
    maxArray.push(
      Math.max(...arrayGiven.splice(0, k, arrayGiven[1], arrayGiven[2]))
    );
  }
  return maxArray;
};
let arrayGiven = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(slidingMaximum(arrayGiven, 3));
