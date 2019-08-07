import React, {PureComponent} from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        console.log('Pure component render')
        return (
            <div className='content'>
                <h4>Pure Component {this.props.name}</h4>
                <hr/>
            </div>
        )
    }
}
