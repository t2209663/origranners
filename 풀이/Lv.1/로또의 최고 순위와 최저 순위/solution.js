function solution(lottos, win_nums) {
	var answer = [];
	let plus = [];
	let count = lottos.filter(element => 0 === element).length;
	if(lottos.filter(x => win_nums.includes(x))) {
		plus = lottos.filter(x => win_nums.includes(x));
	}
	for(let i=0; i<plus.length; i++) {
		let index = lottos.indexOf(plus[i]);
		lottos.splice(index, 1);
	}
	function wins(number){
		if(number === 6) {
			answer.push(1)
		}else if(number === 5) {
			answer.push(2)
		}else if(number === 4) {
			answer.push(3)
		}else if(number === 3) {
			answer.push(4)
		}else if(number === 2) {
			answer.push(5)
		}else{
			answer.push(6)
		}
	}
	if(plus.length === 6) {
		return answer = [1, 1];
	}else if(count === 6){
		return answer = [1, 6];
	}else{
		if(count > 0) {
			let B = plus.length + count;
			let S = plus.length;
			wins(B);
			wins(S);
		}else if(count === 0) {
			let B = plus.length;
			let S = plus.length;
			wins(B);
			wins(S);
		}

	}
	return answer;
}