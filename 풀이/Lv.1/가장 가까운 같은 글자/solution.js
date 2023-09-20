function solution(s) {
	let answer = [];
	let s1 = [];

	for(let i=0; i<s.length; i++){
		if(!s1.includes(s[i])){
			//s1 배열에 s 문자열 없으면 하나씩 넣기
			answer.push(-1); //없으면 -1 answer에 넣어 주기
			s1.push(s[i]); //s1 배열에 s 문자열 하나씩 넣기
			continue; // 뒤에 있는 코드가 실행되지 않도록 continue
		}
		if(s1.includes(s[i])){// 만들어 준 s1 배열에 s[i]가 있따면
			answer.push(s1.length - s1.lastIndexOf(s[i])); // answe에 s1의 현재 길이 - s[i]의 마지막 index를 push
			s1.push(s[i]); //s1에 s[i] 집어 넣기
			continue;
		}

	}
	return answer;
}
