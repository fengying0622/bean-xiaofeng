/**
 * Created by Administrator on 2017/12/29.
 */
import React from "react";
import {login} from "../../actions/login/login"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"


class loginComp extends React.Component {
    userLogin = () => {
        let username = this.refs.name.value;
        let password = this.refs.password.value;
        console.log("用户名："+username+"密码："+password);
            fetch('http://rap.taobao.org/mockjsdata/30695/login ', {method: 'POST',})
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                if(res.success){
                    this.props.login(username,password)
                }
            })
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>Head</p>
            <div className="App">
                <form>
                    <input type="text" ref="name" /><br/>
                    <input type="text" ref="password" />
                </form>

                <button onClick={this.userLogin}>提交</button>
            </div>
                <p>foot</p>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        userData: state.userData
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        login: bindActionCreators(login, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(loginComp);