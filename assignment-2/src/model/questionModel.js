import {EventEmitter} from "events";

class QuestionModel extends EventEmitter {  // observable in js
    // can attach listeners, to detach them, to emit events
    constructor() {
        super();
        // define some state
        this.state = {
            questions: [{
                id: 0,
                userName: "u1",
                title: "First question",
                text: "text of first question",
                creationDate: new Date().toLocaleString(),
                tags: ["tag1", "tag2"],
                score: 0
            },
                {
                    id: 1,
                    userName: "u2",
                    title: "Second question",
                    text: "text of second question",
                    creationDate: new Date().toLocaleString(),
                    tags: ["tag1", "tag3"],
                    score: 1
                }
            ],
            currentId: 1,
            newQuestion: {
                id: -1,
                userName: "", // not shown on form
                title: "",
                text: "",
                creationDate: new Date().toLocaleString(),
                tags: [],
                score: 0
            },
            filterTitle: true, // false will filter tags
            filterText: "",
            filteredQuestions: []
        };
    }

    addQuestion(userName, title, text, tags) {
        // operate on a clone state 
        this.state = {
            ...this.state, // contains all the properties of the old state, copied
            currentId: ++this.state.currentId,
            questions: this.state.questions.concat([{
                id: this.state.currentId,
                userName: userName,
                title: title,
                text: text,
                creationDate: new Date().toLocaleString(),
                tags: tags,
                score: 0
            }]) // but I modify the questions array
        };
        this.emit("change", this.state); // the state has changed, passed the new state as arg
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state, // contains all the properties of the old state, copied
            newQuestion: {
                ...this.state.newQuestion,
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

const questionModel = new QuestionModel();

export default questionModel; // make it singleton