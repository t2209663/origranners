function solution(today, terms, privacies) {
    let result = [];
    let obj1 = {};
    for(let e of terms){
        const [type, month] = e.split(" ");
        obj1[type] = month;
    }
    for(let i = 0; i < privacies.length; i++){
        const[start, type] = privacies[i].split(" ");
        let now = new Date(start);
        let date = new Date(today);
        now.setMonth(now.getMonth() + Number(obj1[type]));
        if(date >= now) result.push(i+1);
    }
    return result;
}
