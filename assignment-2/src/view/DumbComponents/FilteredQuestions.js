import React from 'react';
import MyNavbar from "./MyNavbar";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";


const FilteredQuestions = ({sOUsername, filteredQuestions, filterTitle, filterText}) => (
    <div>
        <MyNavbar searchBar={false} loggedInAsButton={true} logoutButton={true} sOUsername={sOUsername}/>

        <br/>

        <div className="container">

            <div>
                <div className="jumbotron h-50 p-4">
                    <h5 className="display-4">
                        Questions filtered by {filterTitle ? <span>title</span> : <span>tag</span>} "{filterText}":
                    </h5>
                </div>

                <br/>

                {
                    filteredQuestions.sort(function (q1, q2) {
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
                                        <div className="col-sm-11">
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
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);


export default FilteredQuestions;