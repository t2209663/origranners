function solution(s) {
    let answer = '';
    let str = [];
    str = s.split('')
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charCodeAt()
    }
    str.sort(function(a, b)  {
        return b - a;
    });
    for(let i=0; i<str.length; i++){
        str[i] = String.fromCharCode(str[i])
    }
    return str.join('');
}