function solution(N, stages) {
	var answer = [];
	let users = stages.length;

	for(let i=1; i<=N; i++){ //스테이지 for문
		let noClear = stages.filter((users) => i === users).length; //stage 레벨과 스테이지에 머물러 있는 값을 구한 후 길이를 반환
		let ratio = noClear/users;//실패율 구하기
		users -= noClear; //실패율 구한 스테이지는 빼기
		answer.push({stage:i, ratio:ratio})
	}

	answer.sort((a, b) => { //실패율로 정렬
		if(a.ratio === b.ratio) return a.stage - b.stage;
		else return b.ratio - a.ratio;
	});

	return answer.map(obj => obj.stage);//stage로만 이루어진 새로운 배열 만들기
}
