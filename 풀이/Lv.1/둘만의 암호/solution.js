function solution(s, skip, index) {
    let answer = '';
    //a to z 배열
    const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
    //skip 배열로 만들어서 내림차순
    skip = skip.split('').sort();
    s = s.split('');
    const filter = arr.filter(x => !skip.includes(x));
    for(let i=0; i<s.length; i++){
        const idx =filter.indexOf(s[i])
        if(idx+index < filter.length){
            answer += filter[idx+index]
        }else{//filter의 index와 같거나 넘는 순간
            answer += filter[(idx+index) % filter.length]
            //filter.length을 나누고 나머지 값을 반환 처음에 -filter.length를 했는데 그렇게 하면 또 배열을 넘을 수 있어서 나눈 값을 index로 해야 함
            console.log((idx+index) % filter.length)
        }
    }


    return answer;
}



