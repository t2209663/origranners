function solution(left, right) {
	let answer = 0;
	for(let i=left; i<=right; i++){
		if (Number.isInteger(Math.sqrt(i))) { //제곱근이 정수면 약수의 개수가 홀수
			answer -= i;
		} else {
			answer += i;
		}
	}
	return answer;
}
