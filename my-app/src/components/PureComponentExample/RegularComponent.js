import React, {Component} from 'react'

export default class RegComp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log('Regular component render')

        return (
            <div className='content'>
                <h4>Regular Component  {this.props.name}</h4>
                <hr/>
            </div>
        )
    }
}
