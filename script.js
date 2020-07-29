const minCost = cost => {
    let arr = []
    let minItem = 100

    for (let i = 0; i < cost.length; i++) {
        if (cost.length < 1 || cost.length > 100) {      //checks to see that the number of houses is at least 1 and not greater than 100
            alert('Number of houses must be a number between 1 and 100!')
            break
        }
        for (let j = 0; j < cost[i].length; j++) {
            if (cost[i][j] < 0 || cost[i][j] > 100) {
                alert('The unit cost of building a house must be a number between 0 and 100!')//checks that the unit cost is not negative and is <= 100
                break
            }
            if (cost[i][j] < minItem && cost[i][j] != arr.slice(-1)[0]) {
                minItem = cost[i][j]
            }
        }
        arr.push(minItem)
        minItem = 101
    }
    let minimumCost = `Minimum cost: ${arr.reduce((a, b) => a + b)}`
    return minimumCost
}
console.log(minCost([[1,2,3],[1,2,3],[3,3,1]]))