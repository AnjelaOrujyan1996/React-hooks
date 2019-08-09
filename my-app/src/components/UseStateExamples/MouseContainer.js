import React, {useState, useEffect} from 'react'
import HookMouse from "./HookMouse";
import classes from '../../App.css'

function MouseContainer(props) {
    useState();
    let showCoordinats = true;
    const [display, setDisplay] = useState(showCoordinats);

    return (
        <div className={classes.content}>
            <h4 className={classes.middleHeaderStyle}>Hook addEventListener <br/> cleanup example</h4>
            <button className={classes.btnStyle} onClick={() => { setDisplay(!display)}}> Hide/show coordinats </button> <br/>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
