function solution(numbers, hand) {
	let answer = '';
	let leftTumb = 10, rightTumb = 12;

	for(let i=0; i<numbers.length; i++) {
		if(numbers[i]%3 === 1) {
			// 1, 4, 7
			answer += 'L';
			leftTumb = numbers[i];
		}else if(numbers[i]%3 === 0 && numbers[i] !== 0) {
			// 3, 6, 9
			answer += 'R';
			rightTumb = numbers[i];
		}else{
			//2, 5, 8, 0
			if(numbers[i] === 0) {
				numbers[i] = 11;
			}

			let L = Math.abs(numbers[i]-leftTumb);
			let R = Math.abs(numbers[i]-rightTumb);
			//손가락 거리 구하여 양수로 바꾸기

			L = Math.floor(L/3) + Math.floor(L%3);
			R = Math.floor(R/3) + Math.floor(R%3);

			if(L === R) {
				if(hand === 'right') {
					answer += 'R';
					rightTumb = numbers[i];
				}else{
					answer += 'L';
					leftTumb = numbers[i];
				}
			}else if(L < R){
				answer += 'L';
				leftTumb = numbers[i];
			}else{
				answer += 'R';
				rightTumb = numbers[i];
			}
		}
	}
	return answer;
}