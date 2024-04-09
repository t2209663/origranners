function solution(board, moves) {
	var answer = 0;
	let goal = [];

	moves.forEach(e => {
		let selected = select(board, e-1);//0부터 시작
		if(selected) {
			goal.push(selected);

			if(goal[goal.length-2] === goal[goal.length-1]){
				goal.pop();
				goal.pop();
				answer+=2;
			}
		}
	});

	function select (board, moves_index) {
		for(let i=0; i<board.length; i++) {
			if(board[i][moves_index] !== 0) {
				let selected = board[i][moves_index];
				board[i][moves_index] = 0; //뽑았으니 빈값으로

				return selected;
			}
		}
	}
	return answer;
}