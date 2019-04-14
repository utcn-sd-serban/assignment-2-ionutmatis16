import React, {Component} from 'react';
import questionModel from "../../model/questionModel";
import AnswersList from "../DumbComponents/AnswersList";
import sOUserModel from "../../model/sOUserModel";
import answerModel from "../../model/answerModel";
import answersListPresenter from "../../presenter/answersListPresenter";
import sOUserPresenter from "../../presenter/sOUserPresenter";


const mapModelStateToComponentState = (questionModel, answerModel, props) => ({
    question: getQuestionById(questionModel.state.questions, props.match.params.id),
    newAnswer: answerModel.state.newAnswer
});

function getQuestionById(questions, id) {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id === parseInt(id))
            return questions[i];
    }
}

export default class SmartAnswersList extends Component {
    constructor(props) {
        super(props);

        this.state = mapModelStateToComponentState(questionModel, answerModel, props);

        this.listener = () =>
            this.setState(mapModelStateToComponentState(questionModel, answerModel, props));
        answerModel.addListener("change", this.listener);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.index !== this.props.match.params.index) {
            this.setState(mapModelStateToComponentState(questionModel.state, this.props));
        }
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return <AnswersList
            question={this.state.question}
            sOUsername={sOUserModel.state.loggedInSOUser}
            answers={answerModel.state.answersToDisplay}
            newAnswer={this.state.newAnswer}

            onChange={answersListPresenter.onChange}
            onCreate={answersListPresenter.onCreate}
            onLogout={sOUserPresenter.onLogout}
        />
    }
}