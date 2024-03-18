function solution(friends, gifts) {
	const len = friends.length
	const nameMap = new Map()
	const giftTable = new Array(len).fill(0).map(_ => new Array(len).fill(0))
	const rank = new Array(len).fill(0)
	const nextMonth = new Array(len).fill(0)

	//친구들 키값
	friends.forEach((name, idx) => {
		nameMap.set(name, idx)
	})

	//선물 주고받은 내역
	gifts.forEach(info => {
		const [from, to] = info.split(" ")
		giftTable[nameMap.get(from)][nameMap.get(to)]++;
	})

	//기록을 바탕으로 선물 지수 계산
	for(let i=0; i<len; i++) {
		rank[i] = giftTable[i].reduce((acc,cur) => acc += cur, 0) //전체 준 선물 합
		for (let j=0; j<len; j++){
			rank[i] -= giftTable[j][i] // 받은 선물 빼기
		}
	}

	//다음 달 받을 선물 계산
	for(let i=0; i<len; i++){
		for(let j=i+1; j<len; j++){
			//만약 A와 B가 선물을 주고받은 적이 없거나 정확히 같은 수로 선물을 주고받았다
			if (i===j) continue;
			//전자가 선물을 많이 줬을 때
			if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
			//후자가 선물을 많이 줬을 때
			if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
			if (giftTable[i][j] === giftTable[j][i]) {
				if(rank[i] > rank[j]) nextMonth[i]++
				if(rank[i] < rank[j]) nextMonth[j]++
			}
		}
	}
	return Math.max(...nextMonth)
}