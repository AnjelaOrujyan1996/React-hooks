import React from 'react'
import classes from './ActiveQuiz.css'
import AnswerList from "../AnswerList/AnswerList";

class ActiveQuiz extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className={classes.ActiveQuiz}>
                <p className={classes.Question}>
                    <span>
                        <strong> {this.props.activeQuestion}. </strong>
                        {this.props.question}
                    </span>
                    <small><b> {this.props.activeQuestion}&nbsp;/&nbsp;{this.props.answersLength} </b></small>
                </p>

                <AnswerList state={this.props.state} answers={this.props.answers}
                            onAnswerClickHandler={this.props.onAnswerClickHandler}/>
            </div>
        )
    }
}

export default ActiveQuiz
