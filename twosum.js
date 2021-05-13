var twoSum = function(nums, target) {
    const numsitems = {}
    for(const [index, item] of nums.entries()){
        const expect = target - item
            if( expect in numsitems ){
                return [numsitems[expect], index]
            }
            numsitems[item] = index
    }
    return  "No corresponding numbers"
};
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
