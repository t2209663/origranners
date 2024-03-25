function solution(n, lost, reserve) {
	let answer = 0;
	let realRost = lost.filter(x => !reserve.includes(x)).sort((a,b) => a - b);
	let realReserve = reserve.filter(x => !lost.includes(x)).sort((a,b) => a - b);
	//정렬을 해 줘야 +-1을 해결할 수 있다 정렬을 안 해 주면 뒤죽박죽이라 계산이 틀림
	for(j=0; j<realRost.length; j++) {
		for(i=0; i<realReserve.length; i++) {
			if(realRost[j]-1 === realReserve[i] || realRost[j]+1 === realReserve[i] ) {
				realRost.splice(j, 1);
				//realRost.shift(); 도 가능
			}
		}
	}
	return n-realRost.length;
}