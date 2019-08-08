import React from 'react'
import classes from './Layout.css'
import Quiz from "../../containers/Quiz/Quiz";
class Layout extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className={classes.layout}>
                <main>
                    <Quiz/>
                </main>
            </div>
        )
    }
}

export default Layout
