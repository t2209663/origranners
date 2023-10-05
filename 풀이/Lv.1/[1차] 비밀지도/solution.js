function solution(n, arr1, arr2) {
	let answer = [];
	for(let i=0; i<n; i++){
		let num = Number(arr1[i].toString(2))+Number(arr2[i].toString(2));
		let sub = [];

		num = String(num)

		if(num.length !== n){
			num = "0".repeat(n-num.length) + num
		}
		num.split('')
		for(let j=0; j<num.length; j++){
			if(num[j] >= 1){
				sub.push("#")
			}else{
				sub.push(" ")
			}
		}
		answer.push(sub.join(''))
	}
	return answer;
}
