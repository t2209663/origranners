function solution(a, b, n) {
	let answer = 0;
	while(n >= a) {
		let s = Math.floor(n/a)
		n = n - (s*a) + (s * b);
		answer += s*b;
	}
	return answer;
}
