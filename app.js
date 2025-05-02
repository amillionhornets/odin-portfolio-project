function validPos(x, y){
    return x >= 0 && x < 8 && y >= 0 && y < 8
}

function isEnd(currPos, end){
    return currPos[0] == end[0] && currPos[1] == end[1] 
}

function moveKnight(startPos, endPos){
    // Define the valid moves a knight can make
    const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2],[1, -2], [1, 2], [2, -1], [2, 1]]
    // Start a queue storing the path
    let queue = [[startPos]]
    // Have a set for all visited nodes
    let visited = new Set()
    // Add intial position to the set
    visited.add(startPos.toString())
    // BFS loop - continues until queue is empty (all possible moves explored)
    while(queue.length > 0){
        // Get and remove the first path from the queue
        let path = queue.shift()
        let currPos = path[path.length - 1] // Gets the last step in the path
        // Return the path if current position is the end position
        if(isEnd(currPos, endPos)){
            return path
        }
        // brute force next moves
        for(const [X, Y] of moves){ // X = moves[i][0], Y = moves[i][1]
            // Add the valid move to the current position
            let newX = currPos[0] + X
            let newY = currPos[1] + Y
            const newPos = [newX, newY] // Store the new position
            // Make sure the new new position is avlid and has not been visited before
            if(validPos(newX,newY) && !visited.has(newPos.toString())){
                // Flag the new position as visited
                visited.add(newPos.toString())
                // Put the path in the queue
                const newPath = [...path, newPos]
                queue.push(newPath)
            }
        }
    }
    return null
}

// Knights travails
function main(){
    // Make an 8 x 8 2d array to represent a chess board
    let board = []
    for(let x = 0; x < 8; x++){
        let row = []
        for(let y = 0; y < 8; y++){
            row.push(0)
        }
        board.push(row)
    }
    // Set start and end for the knight
    let start = [0,0]
    let end = [7,7]
    // Find the path the knight to take
    let path = moveKnight(start, end)
    // Print out the path and how many moves the knight took
    console.log(`The knight made ${path.length} moves`)
    console.log("Path:")
    squares = ["a", "b", "c", "d", "e", "f", "g", "h"]
    for(let i = 0; i < path.length; i++){
        console.log(`     Step ${i + 1}: ${squares[path[i][0]]}${path[i][1] + 1}`)
    }
}

main()