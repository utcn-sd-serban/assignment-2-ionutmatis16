import sOUserModel from "../model/sOUserModel";

class SOUserPresenter {
    onLogin = () => {
        let newSOUser = sOUserModel.state.newSOUser;
        let sOUsers = sOUserModel.state.sOUsers;
        let loginSuccess = false;

        for (let i = 0; i < sOUsers.length; i++) {
            if (newSOUser.sOUsername === sOUsers[i].sOUsername) {
                if (newSOUser.sOPassword === sOUsers[i].sOPassword) {
                    loginSuccess = true;
                }

            }
        }

        if (loginSuccess) {
            sOUserModel.changeNewSOUserProperty("sOUsername", "");
            sOUserModel.changeNewSOUserProperty("sOPassword", "");
            sOUserModel.changeMainStateProperty("loggedInSOUser", newSOUser.sOUsername);
            sOUserModel.changeMainStateProperty("invalidNameOrPassword", false);
            window.location.assign("#/questions");
        } else {
            sOUserModel.changeNewSOUserProperty("sOUsername", "");
            sOUserModel.changeNewSOUserProperty("sOPassword", "");
            sOUserModel.changeMainStateProperty("invalidNameOrPassword", true);
            window.location.assign("#/");
        }
    };

    onLogout = () => {
        sOUserModel.changeMainStateProperty("loggedInSOUser", "Hacker");
        window.location.assign("#/");
    };

    onRegister = () => {
        let newSOUser = sOUserModel.state.newSOUser;

        sOUserModel.addSOUser(newSOUser.sOUsername, newSOUser.sOPassword);
        sOUserModel.changeNewSOUserProperty("sOUsername", "");
        sOUserModel.changeNewSOUserProperty("sOPassword", "");
        sOUserModel.changeMainStateProperty("loggedInSOUser", newSOUser.sOUsername);
        window.location.assign("#/questions");
    };

    onChange = (property, value) => {
        sOUserModel.changeNewSOUserProperty(property, value);
    };

    toggleLogin = () => {
        let loginOn = !sOUserModel.state.loginFormOpen;
        let registerOn = sOUserModel.state.registerFormOpen;
        if (registerOn)
            registerOn = !registerOn;
        sOUserModel.changeMainStateProperty("loginFormOpen", loginOn);
        sOUserModel.changeMainStateProperty("registerFormOpen", registerOn);
        sOUserModel.changeNewSOUserProperty("sOUsername", "");
        sOUserModel.changeNewSOUserProperty("sOPassword", "");
    };

    toggleRegister = () => {
        let loginOn = sOUserModel.state.loginFormOpen;
        let registerOn = !sOUserModel.state.registerFormOpen;
        if (loginOn)
            loginOn = !loginOn;
        sOUserModel.changeMainStateProperty("loginFormOpen", loginOn);
        sOUserModel.changeMainStateProperty("registerFormOpen", registerOn);
        sOUserModel.changeNewSOUserProperty("sOUsername", "");
        sOUserModel.changeNewSOUserProperty("sOPassword", "");
    };

    checkForSOUsername = (sOUsername) => {
        let foundName = false;
        for (let i = 0; i < sOUserModel.state.sOUsers.length; i++) {
            if (sOUsername === sOUserModel.state.sOUsers[i].sOUsername) {
                foundName = true;
            }
        }
        foundName ? sOUserModel.changeMainStateProperty("nameAlreadyExists", true) :
            sOUserModel.changeMainStateProperty("nameAlreadyExists", false);
    };
}

const sOUserPresenter = new SOUserPresenter();

export default sOUserPresenter;