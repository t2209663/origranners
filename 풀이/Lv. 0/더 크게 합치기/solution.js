function solution(a, b) {
    var answer = 0;
    let first = String(a)+String(b);
    let second = String(b)+String(a);
    if(first > second) {
        answer += first
    }else{
        answer += second
    }
    return Number(answer);
}