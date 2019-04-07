import { EventEmitter } from "events";

class SOUserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            sOUsers: [{
                sOUsername: "u1",
                sOPassword: "p1"
            }, {
                sOUsername: "u2",
                sOPassword: "p2"
            }],
            newSOUser: {
                sOUsername: "",
                sOPassword: ""
            }
        }
    }

    addSOUser(sOUsername, sOPassword) {
        this.state = {
            ...this.state,
            sOUsers: this.state.sOUsers.concat([{
                sOUsername: sOUsername,
                sOPassword: sOPassword
            }])
        };
        this.emit("change", this.state);
    }

    changeNewSOUserProperty(property, value) {
        this.state = {
            ...this.state, // contains all the properites of the old state, copied 
            newSOUser: {
                ...this.state.newSOUser,
                [property]: value // the property contained will be changed
            }
        };
        this.emit("change", this.state); // the state has changed, passed the new state as arg
    }

}

const sOUserModel = new SOUserModel();

export default sOUserModel;