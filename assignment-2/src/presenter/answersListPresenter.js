import sOUserModel from "../model/sOUserModel";
import answerModel from "../model/answerModel";

class AnswersListPresenter {
    onCreate = (questionId) => {
        let newAnswer = answerModel.state.newAnswer;
        answerModel.addAnswer(sOUserModel.state.loggedInSOUser, questionId, newAnswer.text);
        answerModel.changeNewAnswerProperty("text", "");
    };

    onChange = (property, value) => {
        answerModel.changeNewAnswerProperty(property, value);
    };

    onViewAnswers = (index) => {
        let answersToDisplay = answerModel.state.answers.filter(
            answer => answer.questionId === index
        );
        answerModel.changeMainStateProperty("answersToDisplay", answersToDisplay);
        window.location.assign("#/question/" + index);
    };
}

const answersListPresenter = new AnswersListPresenter();

export default answersListPresenter;