function solution(name, yearning, photo) {
    let answer = [];
    for(let i=0; i<photo.length; i++){ //result의 배열
        let sum = 0;
        for(let j=0; j<photo[i].length; j++) {//photo 배열 i 안의 배열
            for(let k=0; k<name.length; k++){//이름의 배열
                if(name[k] === photo[i][j]){//이름과 photo[i] 배열의 안 이름이 같은지 확인
                    sum += yearning[k];
                }
            }
        }
       answer.push(sum)
    }
    return answer;
}