function solution(a, b) {
    var answer = 0;
    if(a === b) {
        answer += a || b;
    }else if(b > a){
        let num = b-a;
        for(let i=a; i<=num+a; i++){
            answer+=i;
        }
    }else{
        let num = a-b;
        for(let i=b; i<=num+b; i++){
            answer+=i;
        }
    }
    return answer;
}