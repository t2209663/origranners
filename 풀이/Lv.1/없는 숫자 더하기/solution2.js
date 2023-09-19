function solution(numbers) {
    numbers = numbers.sort()
    let answer = 0;
    for(let i=0; i<10; i++){
        //생각해 보니 굳이 배열 안 만들고 for문을 0~9로 검사해 준 다음 정답에 정답을 하나씩 더해 주면 된다 .. 바보..
        if(numbers.includes(i) === false){
            answer += i
        }
    }
    return answer;
}