import questionModel from "../model/questionModel";
import sOUserModel from "../model/sOUserModel";

class QuestionsListPresenter {
    onCreate = () => {
        let newQuestion = questionModel.state.newQuestion;
        let newTags;
        newTags = newQuestion.tags.length > 0 ? newQuestion.tags.split(" ") : [];
        questionModel.addQuestion(sOUserModel.state.loggedInSOUser, newQuestion.title,
            newQuestion.text, newTags);
        questionModel.changeNewQuestionProperty("title", "");
        questionModel.changeNewQuestionProperty("text", "");
        questionModel.changeNewQuestionProperty("tags", "");
    };

    onChange = (property, value) => {
        questionModel.changeNewQuestionProperty(property, value);
    };

    onSearchChange = (property, value) => {
        questionModel.changeMainStateProperty(property, value);
    };

    onChangeFilter = () => {
        let currentFilter = questionModel.state.filterTitle;
        questionModel.changeMainStateProperty("filterTitle", !currentFilter);
    };

    onSearchClick = () => {
        let filterText = questionModel.state.filterText;
        let filterTitle = questionModel.state.filterTitle;

        if (filterTitle) {
            let filteredQuestions = questionModel.state.questions.filter(
                question => question.title.toLowerCase().includes(filterText.toLowerCase())
            );
            questionModel.changeMainStateProperty("filteredQuestions", filteredQuestions);
            window.location.assign("#/questions/filter");
        } else {
            let filteredQuestions = questionModel.state.questions.filter(
                question => question.tags.includes(filterText.toLowerCase())
            );
            questionModel.changeMainStateProperty("filteredQuestions", filteredQuestions);
            window.location.assign("#/questions/filter");
        }
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;