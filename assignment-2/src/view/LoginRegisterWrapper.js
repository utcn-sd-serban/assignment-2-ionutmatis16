import React, { Component } from 'react';
import sOUserModel from '../model/sOUserModel';
import LoginRegister from './LoginRegister';
import sOUserPresenter from '../presenter/sOUserPresenter';

const mapModelStateToComponentState = (sOUserModel) => ({
    sOUsers: sOUserModel.sOUsers,
    newSOUser: sOUserModel.newSOUser
});

export default class LoginRegisterWrapper extends Component {
    constructor() {
        super();
        
        this.state = mapModelStateToComponentState(sOUserModel.state);

        this.listener = (modelState) =>
            this.setState(mapModelStateToComponentState(modelState));
        sOUserModel.addListener("change", this.listener);
    }

    // prevent memory leaks
    componentWillUnmount() {
        sOUserModel.removeListener("change", this.listener);
    }

    render() {
        return <LoginRegister
            sOUsers={this.state.sOUsers}
            newSOuser={this.state.newSOUser}
            onRegister={sOUserPresenter.onRegister}
            onChange={sOUserPresenter.onChange}
        />
    }
}