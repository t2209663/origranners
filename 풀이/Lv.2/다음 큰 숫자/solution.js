function solution(n) {
    var answer = 0;
    let nums = n;
    while(true) {
        nums++;
        if(countOne(nums) === countOne(n)) return answer = nums;
    }

    function countOne (num) {
        let count = 0;
        let ej = num.toString(2).split('');
        for(let i=0; i<ej.length; i++){
            if(ej[i] == 1) count++;
        }
        return count;
    }
}