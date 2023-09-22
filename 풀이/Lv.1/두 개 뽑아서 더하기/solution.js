function solution(numbers) {
	var answer = [];
	for(let i=0; i<numbers.length; i++){
		for(let k=0; k<numbers.length; k++){
			if(i !== k){
				answer.push(numbers[i]+numbers[k])
			}
		}
	}
	answer = [...new Set(answer)];
	return answer.sort(function(a,b){ return a-b} );
}
