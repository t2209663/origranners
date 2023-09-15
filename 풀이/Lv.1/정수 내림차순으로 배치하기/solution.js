function solution(n) {
    let answer = 0;
    let number = String(n).split('');
    number.sort((a, b) => b - a)
    for(var i=0; i<number.length; i++){
        answer += number[i]
    }
    return Number(answer);
}