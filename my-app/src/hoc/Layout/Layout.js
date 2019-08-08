import React from 'react'

class Layout extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h1>Layout</h1>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout
