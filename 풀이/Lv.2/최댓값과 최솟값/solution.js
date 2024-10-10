function solution(s) {
    var answer = '';
    let num = [];
    num = s.split(' ');
    num = num.map(Number);
    answer = String(Math.min(...num))+ " " + String(Math.max(...num))
    return answer;
}