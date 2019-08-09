import React from 'react'
import classes from '../../App.css'

function MemoComponent({name}) {
    console.log('memo component')
    return (
        <div className={classes.content}>
            <h4 className={classes.middleHeaderStyle}>MEMO component {name}</h4>
            <hr/>
        </div>
    )
}

export default React.memo(MemoComponent)
