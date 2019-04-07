import questionModel from "../model/questionModel";

class QuestionsListPresenter {
    // help the model create a new student
    onCreate() {
        let newQuestion = questionModel.state.newQuestion;
        questionModel.addQuestion(newQuestion.userName, newQuestion.title, newQuestion.text, newQuestion.tags.split(" "));
        questionModel.changeNewQuestionProperty("title", "");
        questionModel.changeNewQuestionProperty("text", "");
        questionModel.changeNewQuestionProperty("tags", "");
    }

    onChange(property, value) {
        questionModel.changeNewQuestionProperty(property, value);
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;