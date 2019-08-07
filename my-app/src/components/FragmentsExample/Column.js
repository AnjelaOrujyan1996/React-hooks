import React from 'react'

export default class Column extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <React.Fragment>
                <td style={{border: '1px solid black', padding: '15px'}}>Name</td>
                <td style={{border: '1px solid black', padding: '15px'}}>Vishwas</td>
            </React.Fragment>

        )
    }
}
