	function solution(n) {
		    var answer = 0;
		    var n2 = Math.sqrt(n)
		    if(n2 % 1 !== 0){
		        answer = 2;
		    }else{
		        answer = 1;
		    }
		    return answer;
	}