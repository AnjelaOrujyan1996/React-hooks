import React, {useEffect, useRef} from 'react'

function FocusInputWithHooks() {

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })
    return (
        <div className='content'>
            <input type='text' ref={inputRef}/>
        </div>
    )

}

export default FocusInputWithHooks;
