function solution(n) {
	let answer = 0;
	const arr = new Array(n+1).fill(true);// index 0이 존재하므로 배열을 n+1으로 만듦
	arr[0] = false;
	arr[1] = false;
	//배열의 index 0과 1은 소수가 아니므로 false

	for(let i=2; i*i<=n; i++){ //제곱근까지만 반복
		if(arr[i]){
			for(let j=i*i; j<=n; j += i){
				//반복을 i*i부터 시작하는 것은 그 이전의 값은 j 이전의 수에서 이미 확인했음
				arr[j] = false; //배수이므로 소수가 아닌 것으로 만듦
			}
		}
	}
	return arr.filter(el => el).length; //filter로 arr 중 값이 true인 것의 개수를 구함
}
