import React, { Component } from 'react';
import questionModel from '../model/questionModel';
import QuestionsList from './QuestionsList';
import questionsListPresenter from '../presenter/questionsListPresenter';

const mapModelStateToComponentState = (questionModel) => ({
    questions: questionModel.questions,
    newQuestion: questionModel.newQuestion
});

// does not have any input, pulls everything from the model
export default class SmartQuestionsList extends Component {
    constructor() {
        super();
        // compute initial state, will have an internal state which will derive from model
        // create & attach a listener to the model  

        this.state = mapModelStateToComponentState(questionModel.state); //initial state
        // called when the state is updated, get as a param the new state 
        // when the state is updated, I am notified, I recompute my component's state & update it 
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        questionModel.addListener("change", this.listener);
    }



    // prevent memory leaks
    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }



    render() {
        return <QuestionsList
            questions={this.state.questions}
            newQuestion={this.state.newQuestion}
            onCreate={questionsListPresenter.onCreate}
            onChange={questionsListPresenter.onChange}

        />
    }
}