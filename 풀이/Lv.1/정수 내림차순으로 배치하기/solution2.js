function solution(n) {
    const newN = n + ""; //String으로 바꾸는 작업
    const newArr = newN
        .split("") // "" 배열 나누기
        .sort() // 오름차순
        .reverse() // 내림차순으로 배열 바꾸기
        .join(""); // 합치기
 
  return +newArr; //숫자 만들기
}