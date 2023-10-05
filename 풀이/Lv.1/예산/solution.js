function solution(d, budget) {
	let answer = 0;
	d.sort();
	for(let i=0; i<d.length; i++){
		if(d[i] <= budget){
			answer++
			budget -= d[i]
		}
	}
	return answer;
}
