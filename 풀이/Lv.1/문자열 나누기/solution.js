function solution(s) {
	var answer = 0
	let x = ""
	let count = 0
	for(const str of s) {
		if (!count) {
			answer++
			x = str
			console.log(x, str)
		}
		str === x ? count++ : count--
	}
	return answer
}