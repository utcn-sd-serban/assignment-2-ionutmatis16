import React from "react";
import { Route, Switch } from "react-router-dom";
import SmartQuestionsList from "./view/SmartQuestionsList";
import LoginRegisterWrapper from "./view/LoginRegisterWrapper";

export default () => (
  <Switch>
    <Route path="/" exact component={LoginRegisterWrapper}/>
    <Route path="/questions" exact component={SmartQuestionsList}/>
</Switch>);