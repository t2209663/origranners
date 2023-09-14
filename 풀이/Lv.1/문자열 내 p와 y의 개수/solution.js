function solution(s){
    let answer = true;
    let s1 = s.split('');
    let p = 0;
    let y = 0;
    for(let i=0; i<s1.length; i++){
        if(s1[i] === 'p' || s1[i] === 'P') {
            p += 1;
        }else if(s1[i] === 'y' || s1[i] === 'Y'){
            y += 1;
        }
    }

    if(p === y) {
        answer = true;
    }else{
        answer = false;
    }
    return answer;
    
}