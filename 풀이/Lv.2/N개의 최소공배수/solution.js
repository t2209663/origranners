function solution(arr) {
    const getGCD = (a, b) => {
        if (b === 0) return a;
        return getGCD(b, a % b);
    };

    const getLCM = (a, b) => {
        return (a * b) / getGCD(a, b);
    };

    let answer = arr.reduce((LCM,curr) => getLCM(LCM,curr));

    return answer;
}