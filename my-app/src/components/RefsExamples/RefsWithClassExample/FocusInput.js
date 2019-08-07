import React from 'react'
import Input from "./Input";
export default class FocusInput extends React.Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div className='content'>
                <h4> Refs with class example</h4>
                <hr/>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}> Focus Input</button>
            </div>
        )
    }

}
