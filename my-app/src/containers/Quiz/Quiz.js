import React from 'react'
import classes from './Quiz.css'
import ActiveQuiz from "../../components/Quiz/ActiveQuiz/ActiveQuiz";
import FinishQuiz from "../../components/Quiz/FinishQuiz/FinishQuiz";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}, // [id]: 'success' or 'error'
            quiz: [
                {
                    question: 'What color is cloud?',
                    rightAnswerId: 2,
                    id: 1,
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
                    id: 2,
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

    showQuizPage = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {},
        });
    };

    onAnswerClickHandler = (id) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        if (question.rightAnswerId === id) {
            if (!results[id]) {
                results[id] = 'success'
            }

            this.setState({
                answerState: {[id]: 'success'},
                results
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

            results[question.rightAnswerId] = 'error';
            this.setState({
                answerState: {[id]: 'error'},
                results: results
            })
        }

    }

    render() {
        return (
            <div className={classes.Quiz}>

                {!this.state.isFinished &&
                <div className={classes.content}>
                    <h1> Answer all questions </h1>
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
                <FinishQuiz results={this.state.results} quiz={this.state.quiz} showQuizPage={this.showQuizPage}/>
                }


            </div>
        )
    }
}


export default Quiz
