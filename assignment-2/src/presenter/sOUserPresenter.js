import sOUserModel from "../model/sOUserModel";

class SOUserPresenter {
    onLogin() {
        
    }

    onRegister() {
        let newSOUser = sOUserModel.state.newSOUser;
        sOUserModel.addSOUser(newSOUser.sOUsername, newSOUser.sOPassword);
        sOUserModel.changeNewSOUserProperty("sOUsername", "");
        sOUserModel.changeNewSOUserProperty("sOPassword", "");
    }

    onChange(property, value) {
        sOUserModel.changeNewSOUserProperty(property, value);
    }
    
}

const sOUserPresenter = new SOUserPresenter();

export default sOUserPresenter;