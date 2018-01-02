/**
 * Created by Administrator on 2017/12/29.
 */
import loginComp from "../../components/login/Login"
import {connect} from "react-redux"
import {login} from "../../actions/login/login"


const mapDispatchToProps=(dispatch,ownProps) =>({
    onSubmit : () =>{
        dispatch(login(ownProps.name,ownProps.password))
    }
})
const loginCont = connect(
    mapDispatchToProps
)(loginComp)

export default loginCont