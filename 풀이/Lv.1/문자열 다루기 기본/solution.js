function solution(s) {
    let answer = '';
    let num = []
    num = s.split('')
    if(s.length === 4 || s.length === 6){
         for(let i=0; i<num.length; i++){
             if(isNaN(num[i]) === true){
                 answer = false;
                 break;
             }else{
                 answer = true;
             }
         }
    }else{
        answer = false
    }
    return answer;
}