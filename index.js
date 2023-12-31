// Given an integer array nums
// find the subarray with the largest sum
// return its sum

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

var maxSubArray = function (nums) {
  // Initialize the max sum
  let maxSum = nums[0];

  // Loop through all of the elements
  for (let i = 1; i < nums.length; i++) {
    // nums[i] represents the largest sum of all sub-arrays ending with index i
    // then its value should be the larger one between nums[i]
    // nums [i-1] + num[i] (largest sum plus current number with using prefix)
    // calculate nums[0], nums[1]..., nums[n] while comparing each one with current largest sum
    nums[i] = Math.max(0, nums[i - 1] + nums[i]);
    // if nums[i] > maxSum then maxSum = nums[i]
    if (nums[i] > maxSum) maxSum = nums[i];
  }
  return maxSum;
};
