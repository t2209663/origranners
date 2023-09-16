function solution(numbers) {
    let number = [0,1,2,3,4,5,6,7,8,9];
    numbers = numbers.sort()
    let answer = 0;
    for(let i=0; i<number.length; i++){
        if(numbers.includes(number[i]) === false){
            answer += number[i]
        }
    }
    return answer;
}