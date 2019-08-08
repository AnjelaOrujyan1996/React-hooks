import React from 'react'
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            quiz: [
                {
                    question: 'What color is cloud?',
                    rightAnswerId: 2,
                    answers: [
                        {text: "Yellow", id: 1},
                        {text: "Blue", id: 2},
                        {text: "Red", id: 3},
                        {text: "Black", id: 4}
                    ]
                },
                {
                    question: 'What color is banana?',
                    rightAnswerId: 1,
                    answers: [
                        {text: "Yellow", id: 1},
                        {text: "Blue", id: 2},
                        {text: "Red", id: 3},
                        {text: "Black", id: 4}
                    ]
                }
            ]
        };
    }

    onAnswerClickHandler = (id) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        if (question.rightAnswerId === id) {
            this.setState({
                answerState: {[id]: 'success'}
            });

            var timeout = setTimeout(() => {

                    if (this.state.activeQuestion === this.state.quiz.length - 1) {
                        this.setState({
                            isFinished: true
                        })
                    } else {
                        this.setState({
                            activeQuestion: this.state.activeQuestion + 1,
                            answerState: null
                        });

                    }
                    window.clearTimeout(timeout)
                }, 1000
            )
        } else {
            this.setState({
                answerState: {[id]: 'error'}
            })
        }

    }

    render() {
        return (
            <div className={classes.Quiz}>

                {!this.state.isFinished &&
                <div className={classes.content}>
                    <h1> Answer all questions </h1>}
                    <div className={classes.QuizContent}>
                        <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
                                    question={this.state.quiz[this.state.activeQuestion].question}
                                    onAnswerClickHandler={this.onAnswerClickHandler}
                                    answersLength={this.state.quiz.length}
                                    activeQuestion={this.state.activeQuestion + 1}
                                    state={this.state.answerState}/>
                    </div>
                </div>
                }

                {this.state.isFinished &&
                <div className={classes.content}>
                    <h1> Quiz Finished</h1>
                    <div className={classes.QuizContent}>
                        <h4>Right is <b> 1/2 </b></h4>
                        <button className={classes.btnStyle}>Try again</button>
                    </div>
                </div>
                }


            </div>
        )
    }
}


export default Quiz
