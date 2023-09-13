function solution(array) {
	    var answer = [];
	    var a1 = Math.max.apply(null, array);
	    var a2 = array.indexOf(a1);
	    answer = [a1,a2];
	    return answer;
	}