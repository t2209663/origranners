function solution(s){
    let answer = true;
    let a = [];
    for(let i=0; i<s.length; i++) {
        if(a[a.length - 1] === '(' && s[i] === ')') {
            a.pop();
        } else {
            a.push(s[i])
        }
    }
    return !a.length;
}