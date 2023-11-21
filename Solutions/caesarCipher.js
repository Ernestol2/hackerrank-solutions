function caesarCipher(s, k) {
    
    let arr = []
    let shift = k%26
    
    for(let i=0; i<s.length; i++) {
     arr.push(s.charCodeAt(i))
    }
 
    let res = arr.map(e => {
        if(e >= 65 && e <= 90) {
            if(e+shift > 90) {
                return String.fromCharCode(e+shift - 26);
             } else {
                 return String.fromCharCode(e+shift);
             }
         } else if(e >= 97 && e <= 122) {
             if(e+shift > 122) {
                 return String.fromCharCode(e+shift - 26);
             } else {
                 return String.fromCharCode(e+shift);
             }
         } else {
             return String.fromCharCode(e);
         }
         
     });
     console.log(arr);
     
     return res.join('');
 
 }
 
 console.log(caesarCipher('middle-Outz', 2));
 