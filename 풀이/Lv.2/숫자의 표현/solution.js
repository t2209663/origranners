function solution(n) {
    const answer = [];
    let number = [];
    let i = 1, j =1;
    while(i <= n) {
        if(i > n) break;
        number.push(i);
        let total = 0;
        for(const num of number) total += num;
        if (total === n) {
            answer.push(number.shift());
            i = j++;
        }else if(total > n) {
            number = [];
            i = j++;
        }
        i++;
    }
    return answer.length;
}
//효율성 테스트 1개 실패