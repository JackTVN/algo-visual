export function BFS_maze_onestep(maze) {
    if (maze[1].runState === "done") {
        return maze
    }

    let copy = [...maze]

    let w = copy[1].dimension.w
    let h = copy[1].dimension.h

    // If the finding is done, and there's a route to the end
    if (copy[1].runState === "done_with_end") {
        if (copy[1].backtrack.x === -1) {
            copy[1].backtrack.x = copy[1].P[copy[1].end.y][copy[1].end.x].x
            copy[1].backtrack.y = copy[1].P[copy[1].end.y][copy[1].end.x].y
        }
        else {
            copy[1].backtrack = { x: copy[1].P[copy[1].backtrack.y][copy[1].backtrack.x].x, y: copy[1].P[copy[1].backtrack.y][copy[1].backtrack.x].y }
        }

        if (copy[1].start.x === copy[1].backtrack.x && copy[1].start.y === copy[1].backtrack.y) {
            copy[1].runState = "done"
            return copy
        }

        copy[1].H[copy[1].backtrack.y][copy[1].backtrack.x] = true

        return copy
    }

    // If there are nothing in queue -> basically not initialized, get start point
    if (copy[1].Q.length === 0) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (copy[0][i][j] === 'start' && !copy[1].V[i][j]) {
                    copy[1].start = { y: i, x: j }
                    copy[1].Q.push({ y: i, x: j, w: 0 })
                    copy[1].W[i][j] = 0
                    copy[1].P[i][j] = { y: i, x: j }
                }
            }
        }
    }

    if (copy[1].Q.length === 0) {
        copy[1].runState = "done"
        return copy
    }

    copy[1].Q.sort((first, second) => { return first.w > second.w })

    let tile = copy[1].Q.shift()
    while (copy[1].V[tile.y][tile.x]) {
        if (copy[1].Q.length === 0) {
            copy[1].runState = "done"
            return copy
        }
        tile = copy[1].Q.shift()
    }

    copy[1].V[tile.y][tile.x] = true
    copy[1].VCount++

    if (copy[1].end.y === tile.y && copy[1].end.x === tile.x) {
        copy[1].runState = "done_with_end"
        return copy
    }

    let UpT = { x: tile.x, y: tile.y - 1 }
    let DownT = { x: tile.x, y: tile.y + 1 }
    let LeftT = { x: tile.x - 1, y: tile.y }
    let RightT = { x: tile.x + 1, y: tile.y }

    if (UpT.y >= 0 && !copy[1].V[UpT.y][UpT.x] && copy[0][UpT.y][UpT.x] !== "inf") {
        copy[1].W[UpT.y][UpT.x] = copy[1].W[tile.y][tile.x] + 1
        copy[1].Q.push({ y: UpT.y, x: UpT.x, w: copy[1].W[UpT.y][UpT.x] })
        copy[1].P[UpT.y][UpT.x] = { y: tile.y, x: tile.x }
    }
    if (DownT.y < h && !copy[1].V[DownT.y][DownT.x] && copy[0][DownT.y][DownT.x] !== "inf") {
        copy[1].W[DownT.y][DownT.x] = copy[1].W[tile.y][tile.x] + 1
        copy[1].Q.push({ y: DownT.y, x: DownT.x, w: copy[1].W[DownT.y][DownT.x] })
        copy[1].P[DownT.y][DownT.x] = { y: tile.y, x: tile.x }
    }
    if (LeftT.x >= 0 && !copy[1].V[LeftT.y][LeftT.x] && copy[0][LeftT.y][LeftT.x] !== "inf") {
        copy[1].W[LeftT.y][LeftT.x] = copy[1].W[tile.y][tile.x] + 1
        copy[1].Q.push({ y: LeftT.y, x: LeftT.x, w: copy[1].W[LeftT.y][LeftT.x] })
        copy[1].P[LeftT.y][LeftT.x] = { y: tile.y, x: tile.x }
    }
    if (RightT.x < w && !copy[1].V[RightT.y][RightT.x] && copy[0][RightT.y][RightT.x] !== "inf") {
        copy[1].W[RightT.y][RightT.x] = copy[1].W[tile.y][tile.x] + 1
        copy[1].Q.push({ y: RightT.y, x: RightT.x, w: copy[1].W[RightT.y][RightT.x] })
        copy[1].P[RightT.y][RightT.x] = { y: tile.y, x: tile.x }
    }

    copy[1].Q.sort((first, second) => { return first.w > second.w })

    return copy
}

export function Astar_maze_onestep(maze) {
    if (maze[1].runState === "done") {
        return maze
    }

    let copy = [...maze]

    let w = copy[1].dimension.w
    let h = copy[1].dimension.h

    if (copy[1].runState === "done_with_end") {
        if (copy[1].backtrack.x === -1) {
            copy[1].backtrack.x = copy[1].P[copy[1].end.y][copy[1].end.x].x
            copy[1].backtrack.y = copy[1].P[copy[1].end.y][copy[1].end.x].y
        }
        else {
            copy[1].backtrack = { x: copy[1].P[copy[1].backtrack.y][copy[1].backtrack.x].x, y: copy[1].P[copy[1].backtrack.y][copy[1].backtrack.x].y }
        }

        if (copy[1].start.x === copy[1].backtrack.x && copy[1].start.y === copy[1].backtrack.y) {
            copy[1].runState = "done"
            return copy
        }

        copy[1].H[copy[1].backtrack.y][copy[1].backtrack.x] = true

        return copy
    }

    // If there are nothing in queue -> basically not initialized
    if (copy[1].Q.length === 0) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (copy[0][i][j] === 'start' && !copy[1].V[i][j]) {
                    copy[1].start = { y: i, x: j }
                    copy[1].Q.push({ y: i, x: j, w: 0 })
                    copy[1].W[i][j] = 0
                    copy[1].P[i][j] = { y: i, x: j }
                }
            }
        }
    }

    if (copy[1].Q.length === 0) {
        copy[1].runState = "done"
        return copy
    }

    copy[1].Q.sort((first, second) => {
        return (Math.sqrt(Math.pow(first.x - copy[1].end.x, 2) + Math.pow(first.y - copy[1].end.y, 2))) * 2 + first.w -
            (Math.sqrt(Math.pow(second.x - copy[1].end.x, 2) + Math.pow(second.y - copy[1].end.y, 2))) * 2 - second.w
    })

    console.log(copy[1].Q);

    let tile = copy[1].Q.shift()
    while (copy[1].V[tile.y][tile.x]) {
        if (copy[1].Q.length === 0) {
            copy[1].runState = "done"
            return copy
        }
        tile = copy[1].Q.shift()
    }

    copy[1].V[tile.y][tile.x] = true
    copy[1].VCount++

    if (copy[1].end.y === tile.y && copy[1].end.x === tile.x) {
        copy[1].runState = "done_with_end"
        return copy
    }

    let UpT = { x: tile.x, y: tile.y - 1 }
    let DownT = { x: tile.x, y: tile.y + 1 }
    let LeftT = { x: tile.x - 1, y: tile.y }
    let RightT = { x: tile.x + 1, y: tile.y }

    if (UpT.y >= 0 && !copy[1].V[UpT.y][UpT.x] && copy[0][UpT.y][UpT.x] !== "inf") {
        if (copy[1].W[tile.y][tile.x] + 1 < copy[1].W[UpT.y][UpT.x]) {
            copy[1].W[UpT.y][UpT.x] = copy[1].W[tile.y][tile.x] + 1
            copy[1].Q.push({ y: UpT.y, x: UpT.x, w: copy[1].W[UpT.y][UpT.x] })
            copy[1].P[UpT.y][UpT.x] = { y: tile.y, x: tile.x }
        }
    }
    if (DownT.y < h && !copy[1].V[DownT.y][DownT.x] && copy[0][DownT.y][DownT.x] !== "inf") {
        if (copy[1].W[tile.y][tile.x] + 1 < copy[1].W[DownT.y][DownT.x]) {
            copy[1].W[DownT.y][DownT.x] = copy[1].W[tile.y][tile.x] + 1
            copy[1].Q.push({ y: DownT.y, x: DownT.x, w: copy[1].W[DownT.y][DownT.x] })
            copy[1].P[DownT.y][DownT.x] = { y: tile.y, x: tile.x }
        }
    }
    if (LeftT.x >= 0 && !copy[1].V[LeftT.y][LeftT.x] && copy[0][LeftT.y][LeftT.x] !== "inf") {
        if (copy[1].W[tile.y][tile.x] + 1 < copy[1].W[LeftT.y][LeftT.x]) {
            copy[1].W[LeftT.y][LeftT.x] = copy[1].W[tile.y][tile.x] + 1
            copy[1].Q.push({ y: LeftT.y, x: LeftT.x, w: copy[1].W[LeftT.y][LeftT.x] })
            copy[1].P[LeftT.y][LeftT.x] = { y: tile.y, x: tile.x }
        }
    }
    if (RightT.x < w && !copy[1].V[RightT.y][RightT.x] && copy[0][RightT.y][RightT.x] !== "inf") {
        if (copy[1].W[tile.y][tile.x] + 1 < copy[1].W[RightT.y][RightT.x]) {
            copy[1].W[RightT.y][RightT.x] = copy[1].W[tile.y][tile.x] + 1
            copy[1].Q.push({ y: RightT.y, x: RightT.x, w: copy[1].W[RightT.y][RightT.x] })
            copy[1].P[RightT.y][RightT.x] = { y: tile.y, x: tile.x }
        }
    }

    return copy
}