import React from 'react';
import MyNavbar from "./MyNavbar";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

const AnswersList = ({question, sOUsername, answers, newAnswer, onChange, onCreate, onLogout}) => (
    <div>
        <MyNavbar searchBar={false} loggedInAsButton={true} logoutButton={true} sOUsername={sOUsername}
                  onLogout={onLogout}/>

        <br/>

        <div className="container" style={{"padding-top": "5em"}}>

            <div>
                <div className="card myCard">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-1">
                                <h1 className="alignCenter"><FaChevronUp/></h1>
                                <h3 className="alignCenter">{question.score}</h3>
                                <h1 className="alignCenter"><FaChevronDown/></h1>
                            </div>
                            <div className="col-sm-11" style={{"padding-top": "1em"}}>
                                <h5 className="card-title d-inline-block">
                                    <strong> {question.title} </strong></h5>
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
                <br/>
            </div>

            {
                answers.sort(function (a1, a2) {
                    return -a1.score + a2.score;
                }).map((answer, index) => (
                    <div>
                        <div className="card" key={index}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-1">
                                        <h1 className="alignCenter"><FaChevronUp/></h1>
                                        <h3 className="alignCenter">{answer.score}</h3>
                                        <h1 className="alignCenter"><FaChevronDown/></h1>
                                    </div>
                                    <div className="col-sm-11" style={{"padding-top": "1em"}}>
                                        <h6 className="card-title float-right"> {answer.creationDate} </h6>
                                        <p className="card-text">
                                            {answer.text}
                                        </p>
                                        <div>
                                            <p className="d-inline float-right">Posted by <a
                                                href="/">{answer.userName}</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                ))
            }


            <div className="container askQuestionForm" style={{"padding-bottom": "3em"}}>
                <form className>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Answer Text</label>
                        <div className="col-sm-9">
                            <textarea
                                value={newAnswer.text}
                                onChange={e => onChange("text", e.target.value)}
                                className="form-control" placeholder="Type your answer"
                                rows="3" required/>
                        </div>
                    </div>
                </form>
                <button onClick={() => onCreate(question.id)} className="btn btn-block answerSubmitButton">Submit
                </button>
            </div>


        </div>
    </div>
);

export default AnswersList;