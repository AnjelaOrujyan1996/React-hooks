import React, {Component} from 'react'
import RegComp from "./RegularComponent";
import PureComp from "./PureComponent";
import MemoComponent from "./MemoComponent";
import classes from '../../App.css'

export default class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vishwas'
        }

    }
    componentDidMount() {
        setInterval(()=> {
            this.setState({
                name: 'Vishwas'
            })
        }, 2000)
    }

    render() {
        return (
            <div className={classes.content}>
                <h4>Parent Component</h4>
                <hr/>
                <RegComp name={this.state.name}/>
                <PureComp name = {this.state.name}/>
                <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}
