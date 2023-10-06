function solution(a, b) {
	let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
	return week[new Date('2016-'+a+'-'+b).getDay()];
}
