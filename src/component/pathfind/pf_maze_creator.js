/*
    How do these thing work?

    1. Create the entire maze, in list[list] form
    2. Everytime a tile is modified in the maze, put it in a list of change
    
    When the maze app want to create a maze, the function will try to make a maze as fast as possible, then give back the list of tile modify to the app
    The app then just has to replicate the change! easy
*/

var mainPlane = null;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function IIDArrayValued(h, w, value) {
    let arr = Array(h);

    for (let i = 0; i < h; i++){
        arr[i] = Array(w);
        for (let j = 0; j < w; j++){
            arr[i][j] = value;
        }
    }

    return arr;
}

function AddLineRecur(startH, H, startW, W, dir) {
    if (dir === "vertical"){
        if (W - startW < 2) {
            return;
        }

        let splitLine = Math.floor(randomNumber(startW + 1, W - 1) / 2) * 2 + 1
        
        for (let i = startH; i <= H; i++){
            mainPlane[i][splitLine] = "inf"
        }

        let entrance = Math.floor(randomNumber(startH, H - 1) / 2) * 2

        mainPlane[entrance][splitLine] = 1

        AddLineRecur(startH, H, startW, splitLine - 1, "horizontal")
        AddLineRecur(startH, H, splitLine + 1, W, "horizontal")
    }
    else {
        if (H - startH < 2) {
            return;
        }

        let splitLine = Math.floor(randomNumber(startH + 1, H - 1) / 2) * 2 + 1

        for (let i = startW; i <= W; i++){
            mainPlane[splitLine][i] = "inf"
        }

        let entrance = Math.floor(randomNumber(startW, W - 1) / 2) * 2

        mainPlane[splitLine][entrance] = 1

        AddLineRecur(startH, splitLine - 1, startW, W, "vertical")
        AddLineRecur(splitLine + 1, H, startW, W, "vertical")
    }
}

export function Recursive_Division_Maze(h, w) {
    mainPlane = null
    mainPlane = IIDArrayValued(h, w, 1)

    // Fill some edge to get an odd length and width
    if (h % 2 === 0){
        h--
        for (let i = 0; i < w; i++){
            mainPlane[h][i] = "inf"
        }
    }

    if (w % 2 === 0){
        w--
        for (let i = 0; i < h; i++){
            mainPlane[i][w] = "inf"
        }
    }

    AddLineRecur(0, h - 1, 0, w - 1, "vertical")

    return mainPlane;
}

function CheckNeighborTiles(p, h, w){
    let possibleTile = []

    let UpT    = {x: p.x, y: p.y - 1}
    let DownT  = {x: p.x, y: p.y + 1}
    let LeftT  = {x: p.x - 1, y: p.y}
    let RightT = {x: p.x + 1, y: p.y}

    if ( UpT.y >= 0 && mainPlane[UpT.y * 2][ UpT.x * 2] === "inf")
        possibleTile.push(UpT)
    if ( DownT.y <= h && mainPlane[DownT.y * 2][ DownT.x * 2] === "inf")
        possibleTile.push(DownT)
    if ( LeftT.x >= 0 && mainPlane[LeftT.y * 2][ LeftT.x * 2] === "inf")
        possibleTile.push(LeftT)
    if ( RightT.x <= w && mainPlane[RightT.y * 2][ RightT.x * 2] === "inf")
        possibleTile.push(RightT)

    if (possibleTile.length === 0)
        return p
    else
        return possibleTile[Math.floor(Math.random()*possibleTile.length)]

}

export function Prim_Random_Maze(h, w) {
    mainPlane = null
    mainPlane = IIDArrayValued(h, w, "inf")

    let path = []
    let visited = 1

    let tileH = Math.floor((h - 1) / 2)
    let tileW = Math.floor((w - 1) / 2)

    let pos = {x: randomNumber(0, tileW), y: randomNumber(0, tileH)}

    mainPlane[pos.y * 2][pos.x * 2] = 1

    path.push(pos)

    while (visited < (tileH + 1) * (tileW + 1)) {
        let next = CheckNeighborTiles(pos, tileH, tileW)

        if (next === pos) pos = path.pop()
        else {
            mainPlane[next.y * 2][next.x * 2] = 1
            mainPlane[next.y + pos.y][next.x + pos.x] = 1
            path.push(next)
            pos = next
            visited++
        }
    }

    return mainPlane;
}