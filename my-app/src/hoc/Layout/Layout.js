import React from 'react'
import classes from './Layout.css'
import Quiz from "../../containers/Quiz/Quiz";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false
        }

    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className={classes.layout}>
                <Drawer isOpen={this.state.menu} toggleMenuHandler={this.toggleMenuHandler}/>
                <MenuToggle isOpen={this.state.menu} toggleMenuHandler={this.toggleMenuHandler}/>
                <main>
                    <Quiz/>
                </main>
            </div>
        )
    }
}

export default Layout
