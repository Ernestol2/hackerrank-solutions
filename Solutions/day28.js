function main() {
    const N = parseInt(readLine().trim(), 10);
    
    const DESIRED_DOMAIN = "@gmail.com"; 
    
    let compatibleNames = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const firstName = firstMultipleInput[0];

        const emailID = firstMultipleInput[1];
        
        if(emailID.endsWith(DESIRED_DOMAIN)){
            compatibleNames.push(firstName);
        }
    }
    
    const SORTED_NAMES = compatibleNames.sort().join('\n');
    console.log(SORTED_NAMES);
}