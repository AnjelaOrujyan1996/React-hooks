import React, {useState, useEffect} from 'react'
import HookMouse from "./HookMouse";

function MouseContainer(props) {
    useState();
    let showCoordinats = true;
    const [display, setDisplay] = useState(showCoordinats);

    return (
        <div className='content'>
            <h4>Hook addEventListener <br/> cleanup example</h4>
            <button className='btn-style' onClick={() => { setDisplay(!display)}}> Hide/show coordinats </button> <br/>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
