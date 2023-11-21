function processData(input) {
    //Enter your code here
    let removeFirstValFromInput = input.split('\n').slice(1) 
    
    for (let i = 0; i < removeFirstValFromInput.length; i++) {
        let even = '';
        let odd = '';    
        let arrayValue = removeFirstValFromInput[i]
        
        for (let j = 0;  j < arrayValue.length; j++) { 
            if (j % 2 === 0) {
                even += arrayValue[j]
            } 
            else {
                odd += arrayValue[j]  
            }            
        }      
            console.log(`${even} ${odd}`)
    }
} 

console.log(processData('2 Hacker Rank'));

//ESTE CODIGO DE ABAJO SE PUEDE MEJORAR

/*  let arr = input.split(' ')
    let filterArr = (arr.filter(e => e != ''));
    let even = []
    let odd = []

    for(let i=1; i<filterArr.length; i++) {
        even.push([])
        odd.push([])
        for(let j=0; j<filterArr[i].length; j++) {
            if([j] % 2 == 0) {
                even[i-1] +=  filterArr[i][j]
            } else {
                odd[i-1] +=  filterArr[i][j]
            }
        }
    }
    
    console.log(`${even[0]+ '  ' +odd[0]}`);
    console.log(`${even[1]+ '  ' +odd[1]}`); */
    