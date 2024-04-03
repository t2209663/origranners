function solution(ingredient) {
	var answer = 0;
	let hambuger = [];
	for(i=0; i<ingredient.length; i++){
		hambuger.push(ingredient[i]);

		if(hambuger.slice(-4).join('') === '1231') {
			hambuger.splice(-4);
			answer++;
		}
	}
	return answer;
}