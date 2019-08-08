import React from 'react'
import ComponentE from "./ComponentE";
import classes from '../../App.css'

export function ComponentC() {

    return (
        <div className={classes.content}>
            <h4> Use Context Example</h4>
            <hr/>
            <div> Component C</div>
            <hr/>
            <ComponentE/>
        </div>
    )
}
