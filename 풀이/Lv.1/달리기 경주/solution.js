function solution(players, callings) {
    let answer = [];
    let idx = {}; //players index 담을 객체
    for(let i=0; i<players.length; i++){
        idx[players[i]] = i; //players마다 순서 달아 줌
    }
    //부르는 명단을 forEach로 확인
    callings.forEach((player) => {
        //idx의 객체에 부른 명단의 index를 가지고 옴
        const idxTwo = idx[player];
        
        //부른 player의 앞 선수의 index를 가지고 옴
        const firstPlayer = players[idxTwo -1];
        
        //둘의 순서를 바꿔 줌
        players[idxTwo - 1] = player;
        players[idxTwo] = firstPlayer;
        
        //idx 객체의 index도 -+를 해 줌
        idx[player]--;
        idx[firstPlayer]++;
    })
    return players;
}