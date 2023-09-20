function solution(k, score) {
	let answer = [];
	let winner = [];

	score.forEach((v,i) => {
		winner.sort((a,b)=>b-a);

		if(i<k){
			winner.push(v)
		}else{
			if(Math.min(...winner)<v){
				winner.pop();
				winner.push(v);
			}
		}
		answer.push(Math.min(...winner))
	})
	return answer;
}
