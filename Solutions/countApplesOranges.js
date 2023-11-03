function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleLocation = apples.map(apple => {
        return apple + a;
    })

    let orangesLocation = oranges.map(orange => {
        return orange + b;
    })

    console.log(appleLocation.filter(e => e >= s && e <= t).length);
    console.log(orangesLocation.filter(e => e >= s && e <= t).length);
    
   
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));