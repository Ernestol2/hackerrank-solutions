function timeConvertion(s) {
    let splitedTime = (s.split(':'));
    let isPM = splitedTime[2].includes('PM');
    if(isPM) {
        if(splitedTime[0] !== '12'){
            splitedTime[0] = String(Number(splitedTime[0]) + 12)
        }
    } else {
        if(splitedTime[0] === '12'){
            splitedTime[0] = '00'
        }
    }
    
    return splitedTime.join(':').replace('PM', '').replace('AM', '');
}

/////////////

function timeConvertion(s) {
    let splitedTime = s.split(':');
    if(splitedTime[2].includes('PM') && splitedTime[0]<12){
        splitedTime[0] = +splitedTime[0] + 12
    } else if(splitedTime[2].includes('AM') && splitedTime[0] == 12) {
        splitedTime[0] = '00'
    }
    
    return (splitedTime.join(':').slice(0, 8));
}

console.log(timeConvertion('12:05:45PM'));