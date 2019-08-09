import React from 'react'
import classes from "../../../containers/Quiz/Quiz.css";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTimes);
const FinishQuiz = (props) => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0);

    return (
        <div className={classes.content}>
            <h1> Quiz Finished</h1>

            {props.quiz.map((quizItem, index) => {
                return <div>
                    <h4> {index + 1}) {quizItem.question} <FontAwesomeIcon
                        icon={props.results[quizItem.rightAnswerId] === 'error' ? faTimes : faCheck} size="xl"
                        color={props.results[quizItem.rightAnswerId] === 'error' ? 'darkRed' : 'lightGreen'}/></h4>

                </div>
            })}

            <div className={classes.QuizContent}>
                <h4>Right is <b> {successCount}/{props.quiz.length} </b></h4>
                <button className={classes.btnStyle} onClick={props.showQuizPage}>Try again</button>
            </div>
        </div>
    )
}

export default FinishQuiz
