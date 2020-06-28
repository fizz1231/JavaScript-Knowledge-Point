/**
 * @description 长度最小子数组问题，用双指针方法解决，注意边界！
 * @param {*} s
 * @param {*} nums
 * @returns
 */
var minSubArrayLen = function (s, nums) {
  let left = 0,
    right = 0,
    lenMap = [],
    sum = 0;
  while (right <= nums.length) {
    // for (let left = 0; left <= right; left++) {
    //   nums.slice(left, right).map((item) => (sum += item));
    //   if (sum >= s && lenMap.indexOf(right - left) === -1) {
    //     lenMap.push(right - left);
    //   }
    //   sum = 0;
    // }
    while (left <= right) {
      nums.slice(left, right).map((item) => (sum += item));
      if (sum >= s && lenMap.indexOf(right - left) === -1) {
        lenMap.push(right - left);
      }
      sum = 0;
      left++;
    }
    left = 0;
    right++;
  }
  return (
    lenMap.sort((a, b) => {
      return a - b;
    })[0] || 0
  );
};

console.log(minSubArrayLen(19, [5, 1, 3, 5, 7, 4, 9, 2, 8, 4, 6, 12, 3, 8]));
