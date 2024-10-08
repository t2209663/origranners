function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    function time (a) {
        let [min, sec] = a.split(':').map(v => parseInt(v));
        return min*60 + sec;
    }
    let videoT = time(video_len);
    let now = time(pos);
    let opS = time(op_start);
    let opE = time(op_end);

    commands.forEach(command => {
        if(now < 0) now = 0;
        if(now > videoT) now = videoT;

        if(opS <= now && now <= opE) now = opE;

        if(command === 'prev') {
            now -= 10;
        } else if (command === 'next') {
            now += 10;
        }

        if(now < 0) now = 0;
        if(now > videoT) now = videoT;

        if(opS <= now && now <= opE) now = opE;

    })

    answer = Math.floor(now/60).toString().padStart(2,'0') + ":" + (now % 60).toString().padStart(2,'0')
    return answer;
}