// How node map work:
/* 
    Have 2 arg: connection (which have the weight between 2 note), and info

    when done, return a new infoState
*/

export function BFS_node_onestep(connection, info) {
    if (info.runState === "done") {
        return info
    }


    // If the finding is done, and there's a route to the end
    if (info.runState === "done_with_end") {
        if (info.backtrack === -1) {
            info.backtrack = info.P[info.end]
        }
        else {
            info.backtrack = info.P[info.backtrack]
        }

        if (info.start === info.backtrack) {
            info.runState = "done"
            return info
        }

        info.H[info.backtrack] = true

        return info
    }

    let copy = [...info] // Basically a copy of the original info board, because i don't even know

    // If there are nothing in queue -> basically not initialized
    if (copy.Q.length === 0) {
        for (let i = 0; i < copy.amount; i++) {
            if (copy[i] === 'start' && !copy.V[i]) {
                copy.start = i
                copy.Q.push({ id: i, w: 0 })
                copy.W[i] = 0
                copy.P[i] = i
            }
        }
    }

    // If there's still nothing in queue => oop no place to go :< (For node map this probably won't happen that much)
    if (copy.Q.length === 0) {
        copy.runState = "done"
        return copy
    }

    copy.Q.sort((first, second) => { return first.w > second.w })

    // Node here represent the next running node
    let node = copy.Q.shift()
    while (copy.V[node.id]) {
        if (info.Q.length === 0) {
            copy.runState = "done"
            return copy
        }
        node = copy.Q.shift()
    }

    copy.V[node.id] = true
    copy.VCount++

    if (copy.end === node.id) {
        copy.runState = "done_with_end"
        return copy
    }

    for (let i = 0, n = connection[node.id].length; i < n; i++) {
        if (connection[node.id][i] !== 0) {
            copy.W[i] = copy.W[node.id] + 1
            copy.Q.push({ id: i, w: copy.W[i] })
            copy.P[i] = node.id
        }
    }

    copy.Q.sort((first, second) => { return first.w > second.w })

    return copy
}


export function Astar_node_onestep(maze) {
    return 0;
    /*
    if (maze[1].runState === "done") {
        return maze
    }

    let copy = [...maze]

    let w = info.dimension.w
    let h = info.dimension.h

    if (info.runState === "done_with_end") {
        if (info.backtrack.x === -1) {
            info.backtrack.x = info.P[info.end.y][info.end.x].x
            info.backtrack.y = info.P[info.end.y][info.end.x].y
        }
        else {
            info.backtrack = { x: info.P[info.backtrack.y][info.backtrack.x].x, y: info.P[info.backtrack.y][info.backtrack.x].y }
        }

        if (info.start.x === info.backtrack.x && info.start.y === info.backtrack.y) {
            info.runState = "done"
            return copy
        }

        info.H[info.backtrack.y][info.backtrack.x] = true

        return copy
    }

    // If there are nothing in queue -> basically not initialized
    if (info.Q.length === 0) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (copy[0][i][j] === 'start' && !info.V[i][j]) {
                    info.start = { y: i, x: j }
                    info.Q.push({ y: i, x: j, w: 0 })
                    info.W[i][j] = 0
                    info.P[i][j] = { y: i, x: j }
                }
            }
        }
    }

    if (info.Q.length === 0) {
        info.runState = "done"
        return copy
    }

    info.Q.sort((first, second) => {
        return (Math.sqrt(Math.pow(first.x - info.end.x, 2) + Math.pow(first.y - info.end.y, 2))) * 2 + first.w -
            (Math.sqrt(Math.pow(second.x - info.end.x, 2) + Math.pow(second.y - info.end.y, 2))) * 2 - second.w
    })

    let tile = info.Q.shift()
    while (info.V[tile.y][tile.x]) {
        if (info.Q.length === 0) {
            info.runState = "done"
            return copy
        }
        tile = info.Q.shift()
    }

    info.V[tile.y][tile.x] = true
    info.VCount++

    if (info.end.y === tile.y && info.end.x === tile.x) {
        info.runState = "done_with_end"
        return copy
    }

    let UpT = { x: tile.x, y: tile.y - 1 }
    let DownT = { x: tile.x, y: tile.y + 1 }
    let LeftT = { x: tile.x - 1, y: tile.y }
    let RightT = { x: tile.x + 1, y: tile.y }

    if (UpT.y >= 0 && !info.V[UpT.y][UpT.x] && copy[0][UpT.y][UpT.x] !== "inf") {
        if (info.W[tile.y][tile.x] + 1 < info.W[UpT.y][UpT.x]) {
            info.W[UpT.y][UpT.x] = info.W[tile.y][tile.x] + 1
            info.Q.push({ y: UpT.y, x: UpT.x, w: info.W[UpT.y][UpT.x] })
            info.P[UpT.y][UpT.x] = { y: tile.y, x: tile.x }
        }
    }
    if (DownT.y < h && !info.V[DownT.y][DownT.x] && copy[0][DownT.y][DownT.x] !== "inf") {
        if (info.W[tile.y][tile.x] + 1 < info.W[DownT.y][DownT.x]) {
            info.W[DownT.y][DownT.x] = info.W[tile.y][tile.x] + 1
            info.Q.push({ y: DownT.y, x: DownT.x, w: info.W[DownT.y][DownT.x] })
            info.P[DownT.y][DownT.x] = { y: tile.y, x: tile.x }
        }
    }
    if (LeftT.x >= 0 && !info.V[LeftT.y][LeftT.x] && copy[0][LeftT.y][LeftT.x] !== "inf") {
        if (info.W[tile.y][tile.x] + 1 < info.W[LeftT.y][LeftT.x]) {
            info.W[LeftT.y][LeftT.x] = info.W[tile.y][tile.x] + 1
            info.Q.push({ y: LeftT.y, x: LeftT.x, w: info.W[LeftT.y][LeftT.x] })
            info.P[LeftT.y][LeftT.x] = { y: tile.y, x: tile.x }
        }
    }
    if (RightT.x < w && !info.V[RightT.y][RightT.x] && copy[0][RightT.y][RightT.x] !== "inf") {
        if (info.W[tile.y][tile.x] + 1 < info.W[RightT.y][RightT.x]) {
            info.W[RightT.y][RightT.x] = info.W[tile.y][tile.x] + 1
            info.Q.push({ y: RightT.y, x: RightT.x, w: info.W[RightT.y][RightT.x] })
            info.P[RightT.y][RightT.x] = { y: tile.y, x: tile.x }
        }
    }

    info.Q.sort((first, second) => {
        return (Math.sqrt(Math.pow(first.x - info.end.x, 2) + Math.pow(first.y - info.end.y, 2))) * 2 + first.w -
            (Math.sqrt(Math.pow(second.x - info.end.x, 2) + Math.pow(second.y - info.end.y, 2))) * 2 - second.w
    })

    return copy
    */
}
