function solution(k, score) {
	let answer = [];
	let winner = [];
	for(let i=0; i < score.length; i++){

		if(winner.length < k){
			winner.push(score[i])
			answer.push(Math.min(...winner))
			continue;
		}else if(Math.min(...winner) > score[i]){
			answer.push(Math.min(...winner))
			continue;
		}

		winner.sort((a,b) => b - a);
		winner.pop();
		winner.push(score[i]);
		answer.push(Math.min(...winner))

	}
	return answer;
}
