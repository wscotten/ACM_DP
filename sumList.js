/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.cache = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        this.cache.push(this.cache[i - 1] + nums[i]);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i === 0)
        return this.cache[j];
    return this.cache[j] - this.cache[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
