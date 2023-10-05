function solution(s, n) {
	let answer = '';
	const az = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
	const AZ = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
	s = s.split('');
	for(let i=0; i<s.length; i++){
		if(s[i] === ' '){
			answer += ' '
		}else{
			if(s[i].toUpperCase() === s[i]){
				let idx = AZ.indexOf(s[i]);
				answer += AZ[(idx+n)%AZ.length]
			}else if(s[i].toLowerCase() === s[i]) {
				let idx = az.indexOf(s[i]);
				answer += az[(idx+n)%az.length]
			}
		}
	}
	return answer;
}
