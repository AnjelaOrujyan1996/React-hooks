import React from 'react'
import FRInput from "./FRInput";

export default class FRParentInput extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div className='content'>
                <h4> Forwarding Refs Example </h4>
                <hr/>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
