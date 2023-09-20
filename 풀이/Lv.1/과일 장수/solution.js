function solution(k, m, score) {
	var answer = 0;
	let box = Math.floor((score.length)/m); // 박스 개수
	score.sort((a, b) => b - a); // 사과의 점수 내림차순 정리
	for(let i=1; i<=box; i++){
		console.log(score)
		answer += score[m*i-1] * m; // 한 상자의 최솟값 * 한 상자에 들어가는 수
	}

	return answer;
}
