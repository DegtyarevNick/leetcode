/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let [left, right] = [1, Math.max(...piles)];
  while (left < right) {
    let speed = left + Math.floor((right - left) / 2);
    let hours = 0;
    for (let pile of piles) hours += Math.ceil(pile / speed);
    if (hours > h) left = speed + 1;
    else right = speed;
  }
  return left;
};

console.log(minEatingSpeed([3,6,7,11], 8));
console.log(minEatingSpeed([30,11,23,4,20], 5));
console.log(minEatingSpeed([30,11,23,4,20], 6));