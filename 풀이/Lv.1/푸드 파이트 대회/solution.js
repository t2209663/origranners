function solution(food) {
	let answer = [0];// 배열에 물부터 넣어 주기
	for(i=food.length; i>0; i--){ //음식 끝에부터 차례대로 넣어 주기
		let cnt = Math.floor(food[i]/2); // 두 명 사람 나눠서 나머지 버리고 나눠지는 것들 넣기
		for(let k=0; k<cnt; k++){
			answer.push(i);// 우측 끝
			answer.unshift(i);// 왼쪽 끝
		}
	}
	return answer.join(''); //문자열 return
}
