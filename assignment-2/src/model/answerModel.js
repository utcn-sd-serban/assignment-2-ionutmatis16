import {EventEmitter} from "events";

class AnswerModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            answers: [{
                id: 0,
                userName: "u2",
                questionId: 1,
                text: "text of first answer",
                creationDate: new Date().toLocaleString(),
                score: 0
            },
                {
                    id: 1,
                    userName: "b",
                    questionId: 0,
                    text: "text of second answer",
                    creationDate: new Date().toLocaleString(),
                    score: -1
                }
            ],
            currentId: 1,
            newAnswer: {
                userName: "", // not shown on form
                questionId: -1,
                text: "",
                creationDate: new Date().toLocaleString(),
                score: 0
            },
            answersToDisplay: []
        }
    }

    addAnswer(userName, questionId, text) {
        this.state = {
            ...this.state, // contains all the properties of the old state, copied
            currentId: this.currentId + 1,
            answers: this.state.answers.concat([{
                id: this.currentId,
                userName: userName,
                questionId: questionId,
                text: text,
                creationDate: new Date().toLocaleString(),
                score: 0
            }]) // but I modify the questions array
        };
        this.emit("change", this.state); // the state has changed, passed the new state as arg
    }

    changeNewAnswerProperty(property, value) {
        this.state = {
            ...this.state, // contains all the properties of the old state, copied
            newAnswer: {
                ...this.state.newAnswer,
                [property]: value // the property contained will be changed
            }
        };
        this.emit("change", this.state); // the state has changed, passed the new state as arg
    }

    changeMainStateProperty(property, value) {
        this.state = {
            ...this.state,
            [property]: value
        };
        this.emit("change", this.state);
    }
}

const answerModel = new AnswerModel();

export default answerModel;
