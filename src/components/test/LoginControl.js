/**
 * Created by Administrator on 2018/1/8.
 */
import React from "react";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    loginClick =()=>{
        this.setState({
            isLoggedIn : true
        })
    }

    logoutClick =()=>{
        this.setState({
            isLoggedIn : false
        })
    }


    render() {
        console.log(this.state)

        let isLoggedIn = this.state.isLoggedIn;
        let button =null;
        if (isLoggedIn){
            button = <LogoutButton onClick={this.logoutClick} />
        }else{
            button = <LoginButton onClick={this.loginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
     let isLoggedIn = props.isLoggedIn;
     if(isLoggedIn){
        return <UserGreeting />
     } else{
        return <GuestGreeting />
     }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default LoginControl