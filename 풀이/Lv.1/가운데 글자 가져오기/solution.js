function solution(s) {
    var answer = '';
    let index = Math.ceil(s.length/2)-1
    let text = s.split('')
    // if(s.length%2 === 0){
    //     answer += s[index] + s[index+1]
    // }else{
    //     answer += s[index]
    // }
    
    answer = s.length%2 === 0 ? s[index]+ s[index+1] : s[index]
    
    return answer;
}