import React, { Component } from 'react';
import MyNavbar from "./MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Collapse, CardBody, Card, Button } from 'reactstrap';
import sOUserModel from "../model/sOUserModel"


class LoginRegister extends Component {
    constructor() {
        super();
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleRegister = this.toggleRegister.bind(this);
        this.state = {
            userModel: sOUserModel,
            loginFormOpen: false,
            registerFormOpen: false
        }
    }


    toggleLogin() {
        let loginOn = !this.state.loginFormOpen;
        let registerOn = this.state.registerFormOpen;
        if (registerOn)
            registerOn = !registerOn
        this.setState({
            loginFormOpen: loginOn,
            registerFormOpen: registerOn
        });
    }

    toggleRegister() {
        let loginOn = this.state.loginFormOpen;
        let registerOn = !this.state.registerFormOpen;
        if (loginOn)
            loginOn = !loginOn
        this.setState({
            loginFormOpen: loginOn,
            registerFormOpen: registerOn
        });
    }





    render() {
        return (
            <div>
                <MyNavbar searchBar={false} loggedInAsButton={false} logoutButton={false} sOUsername="matij" />

                <div class="container">
                    <div class="jumbotron h-75 p-5">
                        <h1 class="display-4"><strong>Welcome to SlackOverflow! </strong></h1>
                        <p class="lead">This website represent the second assignment for Software Design laboratory.</p>
                        <hr class="my-4" />
                        <p class="lead">To continue please <Button onClick={this.toggleLogin} className="btn myButton">Login</Button>or <Button onClick={this.toggleRegister} className="btn myButton"> Register</Button></p>

                        <div>
                            <Collapse isOpen={this.state.loginFormOpen}>
                                <Card>
                                    <CardBody>
                                        <div className="container askQuestionForm">
                                            <form className>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Username</label>
                                                    <div class="col-sm-9">
                                                        <input
                                                            type="text" class="form-control" placeholder="Enter your username" required />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Password</label>
                                                    <div class="col-sm-9">
                                                        <input
                                                            type="password" class="form-control" placeholder="Enter your password" required />
                                                    </div>
                                                </div>
                                            </form>
                                            <button id="loginToggler" href="/questions" className="btn btn-block answerSubmitButton">Login</button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Collapse isOpen={this.state.registerFormOpen}>
                                <Card>
                                    <CardBody>
                                        <div className="container askQuestionForm">
                                            <form className>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Username</label>
                                                    <div class="col-sm-9">
                                                        <input value={this.props.newSOuser.sOUsername} onChange={e => this.props.onChange("sOUsername", e.target.value)}
                                                            type="text" class="form-control" placeholder="Choose an username" required />
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-sm-3 col-form-label">Password</label>
                                                    <div class="col-sm-9">
                                                        <input value={this.props.newSOuser.sOPassword} onChange={e => this.props.onChange("sOPassword", e.target.value)}
                                                            type="password" class="form-control" placeholder="Choose a password" required />
                                                    </div>
                                                </div>
                                            </form>
                                            <button id="registerToggler" href="/questions" 
                                            disabled = {!(this.props.newSOuser.sOPassword.length > 0 && this.props.newSOuser.sOUsername.length > 0)}
                                            onClick={this.props.onRegister} className="btn btn-block answerSubmitButton">Register</button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    {
                        sOUserModel.state.sOUsers.map((s) =>
                            <div className="jumbotron">
                                <p>{s.sOUsername} </p>
                                <p>{s.sOPassword} </p>
                            </div>
                        )
                    }
                </div>



            </div >
        )
    };
}


export default LoginRegister;