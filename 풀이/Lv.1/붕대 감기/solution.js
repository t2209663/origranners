function solution(bandage, health, attacks) {
    let nowH = health - attacks[0][1];

    if (nowH <= 0 ){
        return -1;
    }else{
        for(let i = 1 ; i < attacks.length ; i++){
            //현재 공격과 이전 공격 차이 시간 구함
            let minusT = attacks[i][0]-attacks[i-1][0] -1;
            // 시간 차 회복 + 추가 회복량 회복
            nowH += minusT * bandage[1] + parseInt(minusT/bandage[0])*bandage[2];
            // 최대 체력 이상일 경우 아닌 경우
            nowH = (nowH > health) ? health : nowH;
            // 공격
            nowH -= attacks[i][1];

            if (nowH <= 0 ){
                // 0보다 이하인 체력일 때
                return -1 ;
            }
        }
    }
    return nowH;
}