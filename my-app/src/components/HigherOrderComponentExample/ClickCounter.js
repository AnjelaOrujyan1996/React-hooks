import React, {Component} from 'react'
import UpdateComponent from './WithCounter'
import classes from '../../App.css'

class ClickCounter extends Component {

    render() {

        const count = this.props.count;

        return (
            <div className={classes.content}>
                <h4 className={classes.middleHeaderStyle}> Higher Order Component Example</h4>
                <hr/>
                <div> Click Counter Component</div>
                <hr/>
                <button onClick={this.props.incrementCount}>
                    Clicked {count} times
                </button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter, 5)
