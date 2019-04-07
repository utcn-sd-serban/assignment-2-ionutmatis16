// DUMB Component
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import MyNavbar from './MyNavbar';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const QuestionsList = ({ questions, newQuestion, onCreate, onChange }) => { // destructuring the first parameter 


    return (
        <div>

            <MyNavbar searchBar={true} loggedInAsButton={true} logoutButton={true} sOUsername="matij" />

            <br />

            <div className="container" style={{ "padding-top": "4em" }}>

                <div >
                    <div className="d-flex justify-content-center">
                        <div className="my-auto">

                        </div>
                    </div>

                    <br />

                    <div>

                        <div className="d-flex justify-content-center" style={{ "padding-bottom": "20px" }}>
                            <div className="my-auto">
                                <button id="toggler" className="align-items-center btn askButtonClass">Ask a question</button>
                            </div>

                        </div>

                        <UncontrolledCollapse toggler="#toggler" >
                            <Card>
                                <CardBody>
                                    <div className="container askQuestionForm">
                                        <form className>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Question Title</label>
                                                <div class="col-sm-9">
                                                    <input value={newQuestion.title} onChange={e => onChange("title", e.target.value)}
                                                        type="text" class="form-control" placeholder="Type the title" required />
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Question Text</label>
                                                <div class="col-sm-9">
                                                    <textarea value={newQuestion.text} onChange={e => onChange("text", e.target.value)}
                                                        class="form-control" placeholder="Type your question" rows="3" required></textarea>                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 col-form-label">Question tags</label>
                                                <div class="col-sm-9">
                                                    <input value={newQuestion.tags} onChange={e => onChange("tags", e.target.value)}
                                                        type="text" class="form-control" placeholder="Enter the tags" required />
                                                </div>
                                            </div>
                                        </form>
                                        <button onClick={onCreate} id="toggler" className="btn btn-block answerSubmitButton">Submit</button>
                                    </div>
                                </CardBody>
                            </Card>
                            <br />
                        </UncontrolledCollapse>

                    </div>



                    {
                        questions.map((question, index) => ( // assign a key for each element
                            <div>
                                <div class="card" key={index}>

                                    <div class="card-body">
                                        <div className="row">
                                            <div className="col-sm-1">
                                                <h1 className="alignCenter"><FaChevronUp/></h1>
                                                <h3 className="alignCenter">{question.score}</h3>
                                                <h1 className="alignCenter"><FaChevronDown/></h1>
                                            </div>
                                            <div className="col-sm-11">
                                                <h5 class="card-title d-inline-block"> <strong> {question.title} </strong></h5>
                                                <h6 class="card-title d-inline-block float-right"> {question.creationDate} </h6>
                                                <p class="card-text">{question.text}</p>
                                                {
                                                    question.tags.map((tag, index) =>
                                                        <button href="/" className="btn btn-sm tagButton d-inline" >{tag}</button>
                                                    )
                                                }
                                                <p className="d-inline float-right">Posted by <a href="/">{question.userName}</a></p>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <br />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
};

// https://visme.co/blog/wp-content/uploads/2016/09/website30-1024x512.jpg
export default QuestionsList; 