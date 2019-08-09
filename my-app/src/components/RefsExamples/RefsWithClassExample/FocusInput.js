import React from 'react'
import Input from "./Input";
import classes from '../../../App.css'

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
            <div className={classes.content}>
                <h4 className={classes.middleHeaderStyle}> Refs with class example</h4>
                <hr/>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}> Focus Input</button>
            </div>
        )
    }

}
