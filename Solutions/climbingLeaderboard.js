function climbingLeaderboard(ranked, player) {
    const rankedSet = [...new Set(ranked)];
    let maxIndex = rankedSet.length;
  
    for (let i = 0; i < player.length; i++) {
      let index = maxIndex - 1;
      while (index >= 0 && player[i] >= rankedSet[index]) {
        index--;
      }
  
      player[i] = index + 2;
    }
  
    return player;
  
  }


console.log(climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120]));

/* 
function climbingLeaderboard(ranked, player) {
    let res = []
    let leaderboard = []
    for(let uniques of ranked) {
        if(!leaderboard.includes(uniques)){
            leaderboard.push(uniques);
        }
    }

    player.map(score => {
        leaderboard.push(score)
        leaderboard.sort((a, b) => b - a)
        res.push(leaderboard.indexOf(score) + 1)
    })

    return res;
}
*/