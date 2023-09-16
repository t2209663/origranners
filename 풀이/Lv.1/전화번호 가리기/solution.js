function solution(phone_number) {
    var answer = '';
    let num = phone_number.length-4;
    let a = "*";
    answer = a.repeat(num);
    answer += phone_number.substr(-4)
    return answer;
}