function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
//인자에 _ 를 넣는 것은 사용하지 않는 인자일 경우 넣는 것 정해진 건 아님아님