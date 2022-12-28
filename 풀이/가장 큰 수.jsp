//정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.



	function solution(array) {
	    var answer = [];
	    var a1 = Math.max.apply(null, array);
	    var a2 = array.indexOf(a1);
	    answer = [a1,a2];
	    return answer;
	}