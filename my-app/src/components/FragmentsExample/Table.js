import React from 'react'
import Column from "./Column";

export default class Table extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='content'>
                <h4> Fragment example </h4>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <Column/>
                    </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}
