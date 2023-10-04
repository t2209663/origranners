function solution(n, m) {
	let answer = [];
	let number = [];
	let div = [];
	for(let i=1; i <= Math.min(n, m); i++){
		if(n%i === 0 && m%i === 0){
			number.push(i);
		}
	}
	let max = Math.max(...number);
	answer.push(max)
	answer.push((n/max)*(m/max)*max)
	return answer;
}
