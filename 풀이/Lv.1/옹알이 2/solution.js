function solution(babbling) {
	let answer = 0;
	let mama = ["aya","ye","woo", "ma"]
	for(i=0; i<babbling.length; i++){
		for(j=0; j<mama.length; j++){
			if(babbling[i].includes(mama[j].repeat(2))){
				break;
			}
			babbling[i] = babbling[i].split(mama[j]).join(" ");
		}
		if(babbling[i].split(" ").join("").length === 0){
			answer += 1;
		}
	}
	return answer;
}
