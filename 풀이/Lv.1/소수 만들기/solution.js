function solution(nums) {
	let answer = 0;
	for(let i=0; i<nums.length; i++){
		for(let j=i+1; j<nums.length; j++){
			for(let k=j+1; k<nums.length; k++){
				let number = nums[i]+nums[k]+nums[j]
				var count = 0;
				for(let l=1; l<=number; l++){
					if(number%l === 0) {
						count++
					}
				}
				if(count === 2){
					answer++
				}
			}
		}
	}
	return answer;
}