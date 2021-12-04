import React from 'react';
import { useState, useEffect } from 'react';

import { useInterval } from '../CHook.js';
import { BFS_maze_onestep, Astar_maze_onestep } from './pf_maze_solver.js';
import { Prim_Random_Maze, Recursive_Division_Maze } from './pf_maze_creator.js';

import CSelect from '../CSelect.js';

//import { Icons } from '../../resources/icon.js'

import './pf_maze.scss';

function IIDArrayValued(h, w, value) {
    let arr = Array(h);

    for (let i = 0; i < h; i++) {
        arr[i] = Array(w);
        for (let j = 0; j < w; j++) {
            arr[i][j] = value;
        }
    }

    return arr;
}

function updateMaze(maze, put, y, x) {
    if (put === -1) {
        return maze;
    }

    let copy = [...maze];

    let startP = copy[1].start;
    let endP = copy[1].end;

    if (put === 'start') {
        copy[1].start = { y: y, x: x }

        if (startP.x !== -1) {
            copy[0][startP.y][startP.x] = 1;
        }
    }
    else if (put === 'end') {
        copy[1].end = { y: y, x: x }

        if (endP.x !== -1) {
            copy[0][endP.y][endP.x] = 1;
        }
    }
    else {
        if (startP.x === x && startP.y === y) copy[1].start = { y: -1, x: -1 }
        if (endP.x === x && endP.y === y) copy[1].end = { y: -1, x: -1 }
    }
    copy[0][y][x] = put;

    return copy;
}

function newMazeState(height, width, start = { y: -1, x: -1 }, end = { y: -1, x: -1 },) {
    /*
        maze object (at the start of the main func) has the 1st value as the entire maze in a 2d array, and the 2nd value as all the important thing
        in the maze (Starting point, Ending point, Priority Queue)
    */

    return {
        start: start, // Start
        end: end, // End
        backtrack: { y: -1, x: -1 }, // Backtrack to work with highlighting end point
        dimension: { h: height, w: width }, // Width and Height
        W: IIDArrayValued(height, width, 1000000), // Weight
        V: IIDArrayValued(height, width, false), // Visited
        VCount: 0,
        Q: [], // Queue
        P: IIDArrayValued(height, width, null), // Tile of previous movement
        H: IIDArrayValued(height, width, false), // Highlight
        runState: "run",
    }
    /* TLDR: maze[1][0] would be the start, [1][1] would be the end, and [1][3] Priority Queue */
}

function UpdateInteract(mazePrev, select) {
    if (mazePrev.selected.y === select.y && mazePrev.selected.x === select.x) {
        return {
            selected: {y: -1, x: -1}
        }
    }
    return {
        selected: { y: select.y, x: select.x }, // Selected Tile
    }
}

function Node(props) {
    return (
        <div draggable='false' 
            className={
                'maze_node mstate' + props.state + (props.visited ? "visited" : "") + (props.highlight ? "highlight" : "")
                + (props.selected ? " selectedTile" : "")
            }
            onMouseDown={props.onDown} onMouseEnter={props.onDrag}>
        </div>
    )
}

function TileInfo(props) {
    return (
        <div id="tile_info">
            <div> Position: {props.pos.y + 1} x {props.pos.x + 1} </div>
            <div> Cost to: {props.c}</div>
            <div> Weight: {props.w === 1000000 ? "Infinite" : props.w} </div>
            {props.d === null ? <div /> : <div> Distance to endpoint: {props.d.toFixed(2)} </div>}

            <div> Visited: {props.v === true ? "True" : "False"} </div>
            {props.prev === null ? <div> Previous Tile: None </div> : <div> Previous Tile: {props.prev.y + 1} x {props.prev.x + 1} </div>}

        </div>
    )
}

function PfMaze(props) {
    const [height, setheight] = useState(10)
    const [width, setwidth] = useState(20)
    const [maze, setmaze] = useState([IIDArrayValued(height, width, 1), newMazeState(height, width)])
    const [mazeInteract, setInteract] = useState({selected:{y: -1, x: -1}})
    const [put, setput] = useState(1)
    const [mouseDown, setmouseDown] = useState(false)
    const [findType, setFind] = useState("BFS")

    // Player states
    const [isRunning, setRun] = useState(false)
    const [delay, setdelay] = useState(1)

    useInterval(() => {
        let runResult = findType === "A*" ? Astar_maze_onestep(maze) : BFS_maze_onestep(maze)
        setmaze(runResult)
        if (runResult[1].runState === "done") setRun(false)

    }, isRunning ? delay : null);

    useEffect(() => {
        setInteract(UpdateInteract(mazeInteract, {y: -1, x: -1}))
        setmaze([IIDArrayValued(height, width, 1), newMazeState(height, width)])
    }, [height])

    useEffect(() => {
        setInteract(UpdateInteract(mazeInteract, {y: -1, x: -1}))
        setmaze([IIDArrayValued(height, width, 1), newMazeState(height, width)])
    }, [width])

    return (
        <div id="pf_workspace" onMouseDown={() => setmouseDown(true)} onMouseUp={() => setmouseDown(false)}>
            <div id='pf_map_info'>
                <label htmlFor='pf_option_h'>Height</label>
                <input type='number' id='pf_option_h' name='pf_option_h'
                    onChange={e => setheight(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value) > 1 ? (parseInt(e.target.value) < 30 ? parseInt(e.target.value) : 29) : 1)}
                />
                <label htmlFor='pf_option_w'>Width</label>
                <input type='number' id='pf_option_w' name='pf_option_w'
                    onChange={e => setwidth(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value) > 1 ? (parseInt(e.target.value) < 60 ? parseInt(e.target.value) : 59) : 1)}
                />
                <CSelect className='pf_option_search' option={['BFS', 'A*', 'Placeholder 2 ', 'Placeholder 3  ']} current={findType} handleChange={setFind} />
                <CSelect className='pf_option_create' option={['', 'Recursive Division', 'Prim (Random Run)']} current=''
                    handleChange={(value) => {
                        if (value === "Recursive Division")
                            setmaze([Recursive_Division_Maze(height, width), newMazeState(height, width)])
                        if (value === 'Prim (Random Run)')
                            setmaze([Prim_Random_Maze(height, width), newMazeState(height, width)])
                    }}
                />
            </div>
            <div id='pf_item'>
                <button id='map_clear' onClick={() => setmaze([IIDArrayValued(height, width, 1), newMazeState(height, width)])}>
                    Clear
                    <span className='tooltip'> Clear all tiles </span>
                </button>
                <button id='map_start_point' onClick={() => put === 'start' ? setput(-1) : setput('start')}
                    style={{ backgroundColor: put === 'start' ? '#5e5e5e' : '#101010', color: put === 'start' ? '#101010' : '#fafafa' }}>
                    Start
                    <span className='tooltip'> Next Tile click will determine the start point </span>
                </button>
                <button id='map_end_point' onClick={() => put === 'end' ? setput(-1) : setput('end')}
                    style={{ backgroundColor: put === 'end' ? '#5e5e5e' : '#101010', color: put === 'end' ? '#101010' : '#fafafa' }}>
                    End
                    <span className='tooltip'> Next Tile click will determine the end point </span>
                </button>
                <button id='map_draw' onClick={() => put === "inf" ? setput(-1) : setput("inf")}
                    style={{ backgroundColor: put === "inf" ? '#5e5e5e' : '#101010', color: put === "inf" ? '#101010' : '#fafafa' }}>
                    Draw
                    <span className='tooltip'> Set tile to wall with weight infinite </span>
                </button>
                <button id='map_delete' onClick={() => put === 1 ? setput(-1) : setput(1)}
                    style={{ backgroundColor: put === 1 ? '#5e5e5e' : '#101010', color: put === 1 ? '#101010' : '#fafafa' }}>
                    Delete
                    <span className='tooltip'> Set tile to nothing with weight 0 </span>
                </button>
                <button id='map_select' onClick={() => put === setput('select')}
                    style={{ backgroundColor: put === 'select' ? '#5e5e5e' : '#101010', color: put === 'select' ? '#101010' : '#fafafa' }}>
                    Select
                    <span className='tooltip'> Select a tile to view its info </span>
                </button>
            </div>
            <div id='pf_screen'>
                <div id='pf_map' style={{ gridTemplateColumns: "repeat(" + width + ", 1fr)", gridTemplateRows: "repeat(" + height + ", 1fr)" }}>
                    {
                        /* 
                            Maze is an array with an array in it (2D Array), first map get one line of the array and pass it with its index 
                            The line is then map again to individual value, pass with the index of the index of the value (indexx)
                            indexy*height + indexx make sure every key is unique so the app don't cry in pain
                        */
                        maze[0].map((line, indexy) => line.map((tile, indexx) =>
                            <Node state={tile} key={indexy * width + indexx}
                                visited={maze[1].V[indexy][indexx]}
                                selected={indexy === mazeInteract.selected.y && indexx === mazeInteract.selected.x}
                                highlight={maze[1].H[indexy][indexx]}
                                weight={maze[1].W[indexy][indexx]}
                                onDown={() => put === "select" ? setInteract(UpdateInteract(mazeInteract, {y: indexy, x: indexx})) : setmaze(updateMaze(maze, put, indexy, indexx))}
                                onDrag={() => put === "select" && mouseDown ? setInteract(UpdateInteract(mazeInteract, {y: indexy, x: indexx})) : setmaze(updateMaze(maze, mouseDown ? put : -1, indexy, indexx))}
                            />
                        ))
                    }
                </div>
                <div id='pf_info'>
                    <div id='pf_maze_player'>
                        <button id='pf_player_run' style={{ backgroundColor: isRunning ? '#5e5e5e' : '#101010' }}
                            onClick={() => setRun(!isRunning)}> Play
                        </button>
                        <button id='pf_player_step' style={{ backgroundColor: isRunning ? '#5e5e5e' : '#101010' }}
                            onClick={() => setmaze(findType === "A*" ? Astar_maze_onestep(maze) : BFS_maze_onestep(maze))}> Step
                        </button>
                        <button id='pf_player_reset' style={{ backgroundColor: '#101010' }}
                            onClick={() => {
                                setRun(false)
                                setmaze([maze[0], newMazeState(height, width, maze[1].start, maze[1].end)])
                            }}>
                            Reset
                        </button>
                        <label htmlFor='pf_player_delay'>Delay</label>
                        <input type='number' id='pf_player_delay' name='pf_player_delay'
                            onChange={e => setdelay(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value) > 1 ? parseInt(e.target.value) : 1)}
                        />
                    </div>
                    <div id='pf_maze_log'>
                        <div id='pf_maze_visit_count'> Tile visited: {maze[1].VCount} </div>
                        <div id='pf_tile_info'>
                            {
                                mazeInteract.selected.x === -1 ? <div id="tile_info" /> :
                                    <TileInfo
                                        pos={mazeInteract.selected}
                                        c={maze[0][mazeInteract.selected.y][mazeInteract.selected.x]}
                                        w={maze[1].W[mazeInteract.selected.y][mazeInteract.selected.x]}
                                        d={
                                            findType !== "A*" ? null :
                                                maze[1].end.x !== -1 ?
                                                    Math.sqrt(Math.pow(mazeInteract.selected.x - maze[1].end.x, 2) + Math.pow(mazeInteract.selected.y - maze[1].end.y, 2)) :
                                                    null
                                        }
                                        v={maze[1].V[mazeInteract.selected.y][mazeInteract.selected.x]}
                                        prev={maze[1].P[mazeInteract.selected.y][mazeInteract.selected.x]}
                                    />
                            }
                        </div>
                    </div>
                    <ul id='pf_maze_queue'>
                        {
                            maze[1].Q.length === 0 ? <div id="empty_queue" /> :
                                maze[1].Q.map((path, index) => {
                                    return (
                                        <li id="path_queue" key={index} onClick={() => setInteract(UpdateInteract(mazeInteract, {y: path.y, x: path.x}))}>
                                            {index}. Position: {path.y} x {path.x}, Weight {findType !== "A*" ? "" : "+ Distance * 2"}: {
                                                    (path.w + 2 * (findType !== "A*" ? 0 : 
                                                    Math.sqrt(Math.pow(path.x - maze[1].end.x, 2) + Math.pow(path.y - maze[1].end.y, 2))
                                                    )).toFixed(2)
                                                }
                                        </li>
                                    )
                                })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export const PathfindMaze = React.memo(PfMaze);