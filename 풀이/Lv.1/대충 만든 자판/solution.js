function solution(keymap, targets) {
	var answer = [];
	let press = 0;

	targets.forEach((target) => {
		for(let i=0; i<target.length; i++) {
			let count = Infinity; //자판에 없는 target을 눌렀을 때 무한대로 나올 수 있기 때문에 999999 값을 해 줘도 괜찮지만 Infinity가 빠르다
			keymap.forEach((key)=>{
				let index = key.indexOf(target[i]) //key에 target이 있는지 확인

				if(index > -1) {
					count = Math.min(count,index+1) // 다른 key에도 같은 값이 있을 수 있으니 둘 중 작은 값을 넣도록
				}
			})
			press += count
		}
		answer.push(press)
		press=0;
	})
	answer = answer.map(target => {
		if(target === Infinity) { //무한대로 돌아가는 것은 없으므로 -1
			target = -1
		}
		return target
	})
	return answer;
}