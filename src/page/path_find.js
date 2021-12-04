import React from 'react';
import { useState } from 'react';

import CSelect from '../component/CSelect';

import  { PathfindMaze } from '../component/pathfind/pf_maze';
import { PathfindNode } from '../component/pathfind/pf_node';

//import {Helmet} from "react-helmet";

import './ss/path_find.scss';

function Pathfind(props) {
    if (props.type === 'Maze') return (<PathfindMaze find={props.find} />)
    if (props.type === 'Nodes') return (<PathfindNode find={props.find} />)
    return (
        <div id='pf_screen'>
            <div id='pf_map'>
                uwu
            </div>
            <div id='pf_info'>
                uwu
            </div>
        </div>
    )
}

function Pathfind_page() {
    const [mapType, setmapType] = useState("Nodes")

    return (
        <div id="pathfind_page">
            <h1> Yoooooo this is the path find page      <a href="./.."> Go back </a> </h1>

            <div id="pathfind_option">
                <CSelect className='pf_option_map' option={['Maze', 'Nodes']} current={mapType} handleChange={setmapType} />
            </div>

            <Pathfind type={mapType} />
        </div>
    );
}

export default Pathfind_page;