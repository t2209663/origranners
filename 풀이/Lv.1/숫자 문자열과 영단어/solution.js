function solution(s) {
	const eng = ['zero','one','two','three','four','five','six','seven','eight','nine']
	for(let i=0; i<eng.length; i++){
		if(s.includes(eng[i]) === true){
			s = s.replaceAll(eng[i], i);
		}

	}
	return +s;
}
