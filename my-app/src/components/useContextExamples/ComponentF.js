import React, {useContext} from 'react'
import {UserContext, ChannelContext} from "../../App";
import classes from '../../App.css'

export default function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div className={classes.content}>
            <div> Component F </div>

        {/*<UserContext.Consumer>*/}
        {/*    {*/}
        {/*        user => {*/}
        {/*            return (*/}
        {/*                <ChannelContext>*/}
        {/*                    {*/}
        {/*                        channel => {*/}
        {/*                            return <div> {user} - {channel}</div>*/}
        {/*                        }*/}
        {/*                    }*/}
        {/*                </ChannelContext>*/}
        {/*            )*/}
        {/*        }*/}
        {/*    }*/}
        {/*</UserContext.Consumer>*/}

        {/* -------- Short way --------*/}
            <div> {user}-{channel} </div>
        </div>
    )
}
