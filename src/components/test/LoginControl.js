/**
 * Created by Administrator on 2018/1/8.
 */
import React from "react";
import "../../styles/test.css"

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
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <WarningBanner isLoggedIn={isLoggedIn}/>
                {isLoggedIn ? <LogoutButton onClick={this.logoutClick} /> : <LoginButton onClick={this.loginClick} />}
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

function WarningBanner(props){
    if(props.isLoggedIn){
        return null;
    }
    return (
        <div className="warning">请注册!</div>
    )
}
export default LoginControl