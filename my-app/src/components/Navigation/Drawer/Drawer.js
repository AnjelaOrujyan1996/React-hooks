import React, {Component} from 'react'
import classes from './Drawer.css'
import {NavLink} from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";

const Links = [1, 2, 3];

class Drawer extends Component {
    constructor(props) {
        super(props);
    }

    renderLinks = () => {
        return Links.map((link, index) => {
            return <li key={index}>
                Link - {link}
            </li>
        })
    };


    render() {
        const cls = [classes.Drawer];
        if (!this.props.isOpen) {
            cls.push(classes['close']);
        }
        return (
            <div>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>

                </nav>
                {this.props.isOpen ? <Backdrop toggleMenuHandler={this.props.toggleMenuHandler}/> : null}
            </div>
        )
    }
}

export default Drawer
