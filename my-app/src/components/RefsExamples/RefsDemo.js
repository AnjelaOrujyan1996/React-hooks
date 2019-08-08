import React from 'react'
import classes from '../../App.css'

export default class RefsDemo extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setRefs = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        // in this way you don't need .current
        if (this.cbRef) {
            this.cbRef.focus();
            console.log(this.cbRef);
        }

        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }

    clickHandler = (e) => {
        if(e.target.name === 'first') {
            alert('Input current value: ' + this.inputRef.current.value)
        } else if(e.target.name === 'second') {
            alert('Input current value: ' + this.cbRef.value)

        }
    }

    render() {
        return (
            <div className={classes.content}>
                <h4> Refs example</h4>
                <hr/>
                <input type='text' ref={this.inputRef} className='mr-3'/>
                <button className={classes.btnStyle} name='first' onClick={this.clickHandler}> I input value</button> <br/>
                <input type='text' ref={this.setRefs} className='mr-3'/>
                <button className={classes.btnStyle} name='second' onClick={(event) => this.clickHandler(event)}> II input value</button> <br/>
            </div>
        )
    }
}
