function solution(number) {
	let answer = 0;
	//백 트래킹
	const combination = (current, start) => {
		if(current.length === 3) {//3에서 조건 확인
			answer += current.reduce((acc,cur) => acc + cur, 0 ) === 0 ? 1 : 0;
			return;
		}
		//start를 통해 순서대로 탐색
		for(let i= start; i<number.length; i++){
			combination([...current, number[i]], i+1)
		}
	}
	combination([],0)
	return answer;
}
