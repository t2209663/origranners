function solution(X, Y) {
	let answer = '';
	const objX = {};
	const objY = {};

	X.split("").forEach((n)=> {
		objX[n] = ++objX[n] || 1;
	});
	Y.split("").forEach((n)=> {
		objY[n] = ++objY[n] || 1;
	});

	let str = "";
	for(let num in objX){
		if(objX[num] && objY[num]){
			str += num.repeat(Math.min(objX[num],objY[num]));
		}
	}

	answer = str.split("").sort((a,b) => b-a);
	if(answer.length === 0) return "-1";
	if(answer[0] === "0") return "0";

	return answer.join("");
}
