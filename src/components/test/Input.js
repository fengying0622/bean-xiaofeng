/**
 * Created by Administrator on 2018/1/19.
 */
import React from "react"
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }
    }

    render(){
        return(
            <input type="text" onChange={this.changeHandler} onKeyDown={this.keyUpHandler} value={this.state.value}/>
        )
    }

    changeHandler = (e) =>{
        this.setState({
            value : e.target.value
        })
    }

    keyUpHandler =(e) =>{
        let value = this.state.value;
        if(e.keyCode === 13 && value.trim()){
            this.props.inputFun(value);
            this.setState({
                value : ""
            })
        }
    }
}
export default Input