import React from 'react'
import AnswerItem from "../AnswerItem/AnswerItem";

const AnswerList = (props) => {

    return (
        <ul>
            {props.answers.map((answer, index) => {
                return <AnswerItem state={props.state ? props.state[answer.id] : null} answer={answer} key={index} onAnswerClickHandler={props.onAnswerClickHandler}/>
            })}
        </ul>
    )
}

export default AnswerList
