import React, {useContext} from 'react'
import {UserContext, ChannelContext} from "../../App";
import ComponentF from "./ComponentF";
import classes from '../../App.css'

export default function ComponentE() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div className={classes.content}>
            <div> Component E </div>
            <div> {user}-{channel} </div>
            <hr/>
            <ComponentF/>
        </div>
    )
}
