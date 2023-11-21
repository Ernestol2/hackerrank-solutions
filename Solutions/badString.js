function bad(s) {
    try {
        let value = parseInt(s)
        console.log(value ? value : value = e);
    } catch(e) {
        console.log('Bad String');
    }
    
}

console.log(bad('7'));

//////

function main() {
    const S = readLine();
    console.log(parseInt(S) ? parseInt(S) : 'Bad String');
}