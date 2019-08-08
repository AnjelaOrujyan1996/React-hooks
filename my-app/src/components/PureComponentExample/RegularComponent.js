import React, {Component} from 'react'
import classes from '../../App.css'

export default class RegComp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log('Regular component render')

        return (
            <div className={classes.content}>
                <h4>Regular Component  {this.props.name}</h4>
                <hr/>
            </div>
        )
    }
}
