function solution(k, tangerine) {
    let answer = 0;
    let size = {};
    //귤 종류대로 객체 만들기
    tangerine.forEach((t) => size[t] ? size[t]++ : size[t] = 1);
    //객체의 귤 갯수만 가지고 옴
    let fruit = Object.values(size);
    //큰 갯수대로 정렬
    fruit.sort((a,b) => b-a);

    let sum = 0;
    for(f of fruit) {
        sum += f;
        answer++;
        if(sum >= k) return answer;
    }
    return answer;
}