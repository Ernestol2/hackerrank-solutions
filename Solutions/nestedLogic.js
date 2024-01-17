function nestedLogic(dates) {
    let [date1, date2] = dates;

    date1 = (date1.split(' '));
    let [day1, month1, year1] = date1.map(e => parseInt(e));

    date2 = (date2.split(' '));
    let [day2, month2, year2] = date2.map(e => parseInt(e));

    if(year1 < year2) {
        console.log('0');
    } else if(year1 > year2) {
        console.log(10000);
    } else if(year1 === year2) {
        if(month1 < month2) {
            console.log(0);
        } else if(month1 > month2) {
            console.log((month1 - month2) * 500);
        } else if(month1 === month2) {
            if(day1 < day2) {
                console.log('0');
            } else if(day1 > day2) {
                console.log((day1 - day2) * 15);
            } else if(day1 === day2) {
                console.log(0);
            }
        }
    }

    
}

console.log(nestedLogic(['24 12 1898', '18 9 1898']));