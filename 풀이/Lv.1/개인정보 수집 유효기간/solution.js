function solution(today, terms, privacies) {
    let answer = [];
    let term = {};
    for(let terms1 of terms){ //term 객체에 terms type,month로 넣기
        const [type, month] = terms1.split(" ")
        term[type] = month
    }
    for(let i=0; i<privacies.length; i++){
        const [privstart, privtype] = privacies[i].split(" ") //개인정보 수집 일자와 종류 나누기
        let startDate = new Date(privstart);
        let nowDate = new Date(today);
        startDate.setMonth(startDate.getMonth() + Number(term[privtype])); //개인정보 시작 날짜 + 각 개인정보 약관 종류의 유효 기간을 더해서 끝나는 달을 구하기
        if (nowDate >= startDate) { //nowDate가 크면 유효 기간이 남았으니 answer에 push 하기
            answer.push(i+1)
        }
        
    }
    return answer;
}