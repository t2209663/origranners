function solution(price, money, count) {
	let answer = 0;
	let plus = 0;
	for(let i=1; i<=count; i++) {
		plus += price * i;
	}
	console.log(count - money % price )
	if(money >= plus) {
		answer = 0;
	}else{
		answer = plus - money
	}

	return answer;
}
