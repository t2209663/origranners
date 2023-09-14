function solution(arr) {
    let answer = 0;
    let plus = 0;

    for(let i=0; i<arr.length; i++){
        plus += arr[i];
    }
    answer = plus/arr.length;
    return answer;
}