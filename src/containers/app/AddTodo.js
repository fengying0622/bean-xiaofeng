/**
 * Created by Administrator on 2017/12/27.
 */
import {connect} from "react-redux";
import React from "react";
import '../../styles/App.css';
import {addTodo} from "../../actions/app/index";

let AddTodo = ({dispatch})=>{
    let input;
    return(
        <form onSubmit={e=>{
            e.preventDefault();
            if(!input.value.trim()){return}
            dispatch(addTodo(input.value))
            input.value=''

        }}>
            <div className="example-input">
                <input ref={node=>{input=node}}/>
                <button>添加</button>
            </div>
        </form>
        )

}

AddTodo =connect()(AddTodo)

export default AddTodo

