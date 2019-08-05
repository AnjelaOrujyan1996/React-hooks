import React, {Component} from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        console.log('component did mount');
        return this.props.changeTitle;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update');
        this.props.changeTitle();
    }

    render() {
        return (
            <div className='content'>
                <h1>Class <br/> Component</h1>
                <div className='round'>
                    {this.state.count}
                </div>
                <div className=''>
                    <button className="btn-style" onClick={this.incrementCount}> Click</button>
                </div>
            </div>
        )
    }
}

