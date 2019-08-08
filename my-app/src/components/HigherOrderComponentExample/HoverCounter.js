import React, {Component} from 'react'
import UpdateComponent from './WithCounter'
import classes from '../../App.css'

class HoverCounter extends Component {

    render() {
        const count = this.props.count;
        return (
            <div className={classes.content}>
                <h4> Higher Order Component Example</h4>
                <hr/>
                <div> Hover Counter Component</div>
                <hr/>
                <button onMouseOver={this.props.incrementCount}> Hovered {count} times.</button>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter, 10)
