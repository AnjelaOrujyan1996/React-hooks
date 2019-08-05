import React, {} from 'react'
import {UserContext, ChannelContext} from "../../App";

export default function ComponentF() {

    return (
        <div className='content'>
            <div> Component F </div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext>
                            {
                                channel => {
                                    return <div> {user} - {channel}</div>
                                }
                            }
                        </ChannelContext>
                    )
                }
            }
        </UserContext.Consumer>
        </div>
    )
}
