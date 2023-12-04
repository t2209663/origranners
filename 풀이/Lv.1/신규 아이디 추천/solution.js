function solution(new_id) {
	let answer = '';
	//1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
	let set_id = new_id.toLowerCase();
	//2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
	//3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
	set_id = set_id.replace(/[^\w\-\.]/g,'').replace(/\.{2,}/g,'.').split('');
	//배열로 골라내기 쉽게 함 근데 그냥 문자열로 해도 될 듯..
	let set_id2 = [];
	for(let i=0; i<set_id.length; i++){
		set_id2.push(set_id[i]);
	}
	//4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
	let slice = () => {
		if(set_id2[0] === '.'){
			set_id2 = set_id2.slice(1);
		}
		if(set_id2[set_id2.length-1] === '.'){
			set_id2 = set_id2.slice(0,set_id2.length-1);
		}
	}
	slice(set_id2);

	//5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
	if(set_id2.length === 0){
		set_id2.push('aaa');
	}
	//6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
	//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
	set_id2 = set_id2.slice(0,15);
	slice(set_id2); //slice로 묶어 둔 이유 2번 쓰기 때문에

	//문자로 다시 만들기
	set_id2 = set_id2.join('');

	//7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
	if(set_id2.length <= 2){
		let repea = 3 - set_id2.length;
		let str = set_id2.charAt(set_id2.length-1)
		for(let k=0; k<repea; k++){
			set_id2 += str;
		}
	}
	return set_id2;
}
