import React, {PureComponent} from 'react'
import classes from '../../App.css'

export default class PureComp extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        console.log('Pure component render')
        return (
            <div className={classes.content}>
                <h4 className={classes.middleHeaderStyle}>Pure Component {this.props.name}</h4>
                <hr/>
            </div>
        )
    }
}
