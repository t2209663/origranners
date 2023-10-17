function solution(nums) {
	let max = nums.length /2;
	nums = [...new Set(nums)];
	return nums.length > max ? max : nums.length
}