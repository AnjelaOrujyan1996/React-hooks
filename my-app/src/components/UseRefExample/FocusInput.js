import React, {useEffect, useRef} from 'react'
import classes from '../../App.css'

function FocusInputWithHooks() {

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })
    return (
        <div className={classes.content}>
            <input type='text' ref={inputRef}/>
        </div>
    )

}

export default FocusInputWithHooks;
