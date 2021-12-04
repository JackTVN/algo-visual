import React from 'react';
import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

import { useInterval } from '../CHook.js';

import CSelect from '../CSelect.js';
import { BFS_node_onestep, Astar_node_onestep } from './pf_node_solver.js';

import './pf_node.scss';

function Node(props) {
    //https://stackoverflow.com/a/63603903

    // Selfnote: add (props.info.length === 0 ? "" : " " + props.info.join(" ")) to the div if need to do multiple class

    const nodeRef = React.useRef(null);

    let fillColor = "#000000"

    

    if (props.info.indexOf('start') + 1) {
        fillColor = "rgb(90, 155, 25)"
    }

    console.log(props.info.indexOf('start'));

    return (
        <Draggable nodeRef={nodeRef}
            axis="both"
            bounds="parent"
            handle={null}
            position={{y: props.y, x: props.x}}
            onDrag={props.updateLoc}
            grid={null}
        >
            <div id="pf_div_node_holder" ref={nodeRef} onMouseDownCapture={props.onInteract} onTouchStartCapture={props.onInteract}>
                <svg id={"pf_node"} width="44" height="44">
                    <circle cx="22" cy="22" r="20" stroke="#fafafa" strokeWidth="1" fill={fillColor}/>
                    <text id="pf_node_text" dominantBaseline="middle" x="50%" y="50%" fill="#fafafa">{props.indexValue + 1}</text>
                </svg>
            </div>
        </Draggable>
    )
}

function updateNodeLocation(original, idx, y, x) {
    let newMap = [...original]

    if (y === -1) {
        newMap.splice(idx, 1)
        return newMap
    }

    if (idx >= original.length) {
        newMap.push({y: y, x: x})
        return newMap
    }

    newMap[idx].y = y
    newMap[idx].x = x

    return newMap
}

function updateConnection(original, idx1, idx2) {
    let newMap = [...original]

    newMap[idx1][idx2] = newMap[idx1][idx2] === 1 ? 0 : 1
    newMap[idx2][idx1] = newMap[idx2][idx1] === 1 ? 0 : 1

    return newMap
}

function deleteConnection(original, idx) {
    let newMap = [...original]

    newMap.splice(idx, 1)

    for (let i = 0; i < newMap.length; i++) {
        newMap[i].splice(idx, 1)
    }

    return newMap
}

function addConnection(original, idx) {
    let newMap = [...original]

    newMap.push(new Array(original.length).fill(0))

    for (let i = 0; i < newMap.length; i++) {
        newMap[i].push(0)
    }

    return newMap
}

function newNodeInfo(amount, start = -1, end = -1) {
    return {
        indivInfo: new Array(amount).fill([]),
        start: start,
        end: end,
        backtrack: -1, // Backtrack to work with highlighting end point
        nodeAmount: 1, // Width and Height
        W: new Array(amount).fill(10000000), // Weight
        V: new Array(amount).fill(false), // Visited
        VCount: 0,
        Q: [], // Queue
        P: new Array(amount).fill(null), // Node of previous movement
        H: new Array(amount).fill(false), // Highlight
        runState: "run",
    }
}

function PfNode(props) {
    const [mouseDown, setmouseDown] = useState(false)
    const [nodeAmount, setAmount] = useState(2)
    const [nodeLocation, setnodeLocation] = useState([{x: 0, y: 0}, {x: 40, y: 40}])
    const [nodeConnection, setConnection] = useState([[0,1],[1,0]])
    const [nodeInfo, setnodeInfo] = useState(newNodeInfo(2))

    const [findType, setFind] = useState("BFS")

    // Controller
    const [put, setPut] = useState(0)
    const [connectStart, setConnectStart] = useState(-1)

    
    // Player states
    const [isRunning, setRun] = useState(false)
    const [delay, setdelay] = useState(1)

    /*
    useInterval(() => {
        let runResult = props.find === "A*" ? Astar_node_onestep(maze) : BFS_node_onestep(maze)
        setmaze(runResult)
        if (runResult[1].runState === "done") setRun(false)

    }, isRunning ? delay : null);
    */

    const updateInfo = (pos, value) => {
        let copy = nodeInfo
        if (value === "start" || value === "end") {
            // Go to every element on the list of info, each element is a list of basically effect, and remove the effect that is == to value
            copy.indivInfo.map(nInfo => nInfo = nInfo.filter(element => element !== value))
        }
        copy.indivInfo[pos].push(value)
        setnodeInfo(copy)
    }

    return (
        <div id="pf_node_workspace">
            <div id="pf_node_info">
                <CSelect className='pf_option_search' option={['BFS', 'A*', 'Placeholder 2 ', 'Placeholder 3  ']} current={findType} handleChange={setFind} />
            </div>
            <div id="pf_node_item">
                <button id='node_add' onClick={() => put === 1 ? setPut(0) : setPut(1)}
                    style={{ backgroundColor: put === 1 ? '#5e5e5e' : '#101010', color: put === 1 ? '#101010' : '#fafafa' }}>
                    Draw
                    <span className='tooltip'> Add a node </span>
                </button>
                <button id='node_delete' onClick={() => put === -1 ? setPut(0) : setPut(-1)}
                    style={{ backgroundColor: put === -1 ? '#5e5e5e' : '#101010', color: put === -1 ? '#101010' : '#fafafa' }}>
                    Delete
                    <span className='tooltip'> Delete a node </span>
                </button>
                <button id='node_connect' onClick={ () => {if (put === "connect") { setPut(0) } else {setPut("connect"); setConnectStart(-1)}} }
                    style={{ backgroundColor: put === "connect" ? connectStart !== -1 ? '#ffff7f' : '#5e5e5e' : '#101010', color: put === "connect" ? '#101010' : '#fafafa' }}>
                    Connect
                    <span className='tooltip'> Connect 2 node </span>
                </button>
                <button id='node_start_point' onClick={() => put === 'start' ? setPut(0) : setPut('start')}
                    style={{ backgroundColor: put === 'start' ? '#5e5e5e' : '#101010', color: put === 'start' ? '#101010' : '#fafafa' }}>
                    Start
                    <span className='tooltip'> Next Node click will determine the start point </span>
                </button>
                <button id='node_end_point' onClick={() => put === 'end' ? setPut(0) : setPut('end')}
                    style={{ backgroundColor: put === 'end' ? '#5e5e5e' : '#101010', color: put === 'end' ? '#101010' : '#fafafa' }}>
                    End
                    <span className='tooltip'> Next Node click will determine the end point </span>
                </button>
            </div>
            <div id="pf_node_screen" onMouseDown={() => setmouseDown(true)} onMouseUp={() => setmouseDown(false)}>
                <div id="pf_node_map" style={{position: "relative"}}
                    onClick = {(e) => {
                        let rect = e.target.getBoundingClientRect()
                        if (put === 1) {
                            setnodeLocation(updateNodeLocation(nodeLocation, nodeAmount, e.pageY - rect.top - 22, e.pageX - rect.left - 22))
                            setConnection(addConnection(nodeConnection, nodeAmount))
                            setAmount(nodeAmount + 1)
                        }
                    }}
                >
                    <svg id="pf_node_pathDraw" style={{ height: "100%", width: "100%", position: 'absolute', top: '0px', left: '0px'}}>
                            {nodeConnection.map((node1, index1) => node1.map((node2, index2) => {
                                if (index1 != null && index2 != null && index2 > index1 && node2 === 1) {
                                    return (
                                    <line 
                                        key = {index1 * nodeAmount + index2}
                                        x1 = {nodeLocation[index1].x + 22}
                                        y1 = {nodeLocation[index1].y + 22}
                                        x2 = {nodeLocation[index2].x + 22}
                                        y2 = {nodeLocation[index2].y + 22}
                                        style = {{ stroke: "rgb(239,239,239)", strokeWidth: "1" }}
                                    />
                                    )
                                }
                            })
                            )}
                    </svg>
                    <div id="draggable_holder" style={{ height: "100%", width: "100%", zIndex: "1", backgroundColor: "#00000000"}}>
                        
                        {nodeLocation.map((node, index) => 
                            <Node 
                                indexValue = {index}
                                key = {index}
                                y = {node.y}
                                x = {node.x}
                                info = {nodeInfo.indivInfo[index]}
                                onInteract = {() => {
                                    if (put === -1) {
                                        setnodeLocation(updateNodeLocation(nodeLocation, index, -1, -1))
                                        setConnection(deleteConnection(nodeConnection, index))
                                        setnodeInfo(newNodeInfo(nodeAmount - 1))
                                        setAmount(nodeAmount - 1)
                                    }

                                    if (put === "connect") {
                                        if (connectStart === -1) {
                                            setConnectStart(index)
                                        }
                                        else {
                                            setConnection(updateConnection(nodeConnection, connectStart, index))
                                        }
                                    }
                                    if (put === "start" || put === "end") {
                                        updateInfo(index, put)
                                    }
                                }}
                                updateLoc = {(e, pos) => setnodeLocation(updateNodeLocation(nodeLocation, index, pos.y, pos.x))}
                            />
                        )}
                    </div>
                </div>
                <div id="pf_node_info">
                    <div id='pf_node_player'>
                        <button id='pf_node_run' style={{ backgroundColor: isRunning ? '#5e5e5e' : '#101010' }}
                            onClick={() => setRun(!isRunning)}> Play
                        </button>
                        <button id='pf_node_step' style={{ backgroundColor: isRunning ? '#5e5e5e' : '#101010' }}
                            onClick={() => setnodeInfo(findType === "A*" ? Astar_node_onestep(nodeConnection, nodeInfo) : BFS_node_onestep(nodeConnection, nodeInfo))}> Step
                        </button>
                        <button id='pf_node_reset' style={{ backgroundColor: '#101010' }}
                            onClick={() => {
                                setRun(false)
                                //setmaze([maze[0], newMazeState(height, width, maze[1].start, maze[1].end)])
                            }}>
                            Reset
                        </button>
                        <label htmlFor='pf_node_delay'>Delay</label>
                        <input type='number' id='pf_node_delay' name='pf_node_delay'
                            onChange={e => setdelay(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value) > 1 ? parseInt(e.target.value) : 1)}
                        />
                    </div>
                    {nodeConnection.map((node1, index1) => {
                        return (
                            <div>
                                {node1.map((node2, index2) => { 
                                    return ( 
                                        <span> {nodeConnection[index1][index2]} </span> 
                                    ) 
                                })}
                            </div>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}

export const PathfindNode = React.memo(PfNode);