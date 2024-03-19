function solution(dartResult) {
	var answer = 0;
	let score = 0;
	let cnt = [];
	for(let i=0; i<dartResult.length; i++){
		if(!isNaN(dartResult[i])) {
			if( dartResult[i] == 1 && dartResult[i+1] == 0 ) {
				score = 10
				i++
			} else {
				score = Number(dartResult[i])
			}
		}if (dartResult[i] === 'S') {
			cnt.push(score);
		}else if (dartResult[i] === 'D') {
			cnt.push(Math.pow(score, 2));
		}else if (dartResult[i] === 'T') {
			cnt.push(Math.pow(score,3))
		}else if(dartResult[i] === "*") {
			cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
			cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
		}else if(dartResult[i] === '#') {
			cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
		}
	}
	answer = cnt.reduce((acc,cur) => acc + cur, 0)
	return answer;
}