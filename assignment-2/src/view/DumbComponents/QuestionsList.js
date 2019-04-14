// DUMB Component
import React from 'react';
import '../../App.css';
import {UncontrolledCollapse, CardBody, Card} from 'reactstrap';
import MyNavbar from './MyNavbar';
import {FaChevronDown, FaChevronUp} from "react-icons/fa";


const QuestionsList = ({
                           questions, newQuestion, onCreate, onChange, sOUsername, filterTitle,
                           onChangeFilter, onSearchClick, filterText, onSearchChange,
                           onViewAnswers, onLogout
                       }) => {


    return (
        <div>

            <MyNavbar searchBar={true} loggedInAsButton={true} logoutButton={true} sOUsername={sOUsername}
                      filterTitle={filterTitle} onChangeFilter={onChangeFilter} onSearchClick={onSearchClick}
                      filterText={filterText} onSearchChange={onSearchChange} onLogout={onLogout}/>

            <br/>

            <div className="container" style={{"padding-top": "4em"}}>

                <div>
                    <div className="d-flex justify-content-center">
                        <div className="my-auto">

                        </div>
                    </div>

                    <br/>

                    <div>
                        <div className="d-flex justify-content-center" style={{"padding-bottom": "20px"}}>
                            <div className="my-auto">
                                <button id="toggler" className="align-items-center btn askButtonClass">Ask a question
                                </button>
                            </div>
                        </div>

                        <UncontrolledCollapse toggler="#toggler">
                            <Card>
                                <CardBody>
                                    <div className="container askQuestionForm">
                                        <form className>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Question Title</label>
                                                <div className="col-sm-9">
                                                    <input value={newQuestion.title}
                                                           onChange={e => onChange("title", e.target.value)}
                                                           type="text" className="form-control"
                                                           placeholder="Type the title" required/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Question Text</label>
                                                <div className="col-sm-9">
                                                    <textarea value={newQuestion.text}
                                                              onChange={e => onChange("text", e.target.value)}
                                                              className="form-control" placeholder="Type your question"
                                                              rows="3" required/></div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Question tags</label>
                                                <div className="col-sm-9">
                                                    <input value={newQuestion.tags}
                                                           onChange={e => onChange("tags", e.target.value)}
                                                           type="text" className="form-control"
                                                           placeholder="Enter the tags separated by space" required/>
                                                </div>
                                            </div>
                                        </form>
                                        <button onClick={onCreate} id="toggler"
                                                className="btn btn-block answerSubmitButton">Submit
                                        </button>
                                    </div>
                                </CardBody>
                            </Card>
                            <br/>
                        </UncontrolledCollapse>

                    </div>

                    {
                        questions.sort(function (q1, q2) {
                            return -q1.creationDate.localeCompare(q2.creationDate);
                        }).map((question, index) => ( // assign a key for each element
                            <div>
                                <div className="card" key={index}>

                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-1">
                                                <h1 className="alignCenter"><FaChevronUp/></h1>
                                                <h3 className="alignCenter">{question.score}</h3>
                                                <h1 className="alignCenter"><FaChevronDown/></h1>
                                            </div>
                                            <div className="col-sm-11" style={{"padding-top": "1em"}}>
                                                <h5 className="card-title d-inline-block">
                                                    <strong className="fakeLink"
                                                            onClick={() => onViewAnswers(question.id)}>{question.title} </strong>
                                                </h5>
                                                <h6 className="card-title d-inline-block float-right"> {question.creationDate} </h6>
                                                <p className="card-text">{question.text}</p>
                                                {
                                                    question.tags.map((tag, index) =>
                                                        <button key={index}
                                                                className="btn btn-sm tagButton d-inline">{tag}</button>
                                                    )
                                                }
                                                <p className="d-inline float-right">Posted by <a
                                                    href="/">{question.userName}</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

// https://visme.co/blog/wp-content/uploads/2016/09/website30-1024x512.jpg
export default QuestionsList; 