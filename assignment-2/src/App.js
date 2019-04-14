import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import SmartLoginRegister from "./view/SmartComponents/SmartLoginRegister";
import SmartQuestionsList from "./view/SmartComponents/SmartQuestionsList";
import SmartAnswersList from "./view/SmartComponents/SmartAnswersList";
import SmartFilteredQuestions from "./view/SmartComponents/SmartFilteredQuestions";

const App = () => (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact component={SmartLoginRegister} path="/"/>
                <Route exact component={SmartQuestionsList} path="/questions"/>
                <Route exact component={SmartFilteredQuestions} path="/questions/filter"/>
                <Route exact component={SmartAnswersList} path="/question/:id"/>
            </Switch>
        </HashRouter>
    </div>
);


export default App;
