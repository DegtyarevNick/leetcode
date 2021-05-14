/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const outputNums = [];
    let leftSide = 1;
    let rightSide = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        outputNums[i] = rightSide;
        rightSide *= nums[i];
    }
    for (let [index,item] of nums.entries()){
        outputNums[index] *= leftSide;
        leftSide *= item;
    }
    return outputNums;
};
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));