/**
 * Created by Administrator on 2018/1/19.
 */
import React from "react"
import Input from "./Input"
import TodoList from "./TodoList"

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toDos:[]
        }
    }
    inputFun = (value) =>{
        let id=this.state.toDos.length;
        this.setState({
            toDos: this.state.toDos.concat({
                id : id,
                text : value
            })
        })
    }
    deleteFun =(id)=>{
        let data = this.state.toDos;
       this.setState({
           toDos : data.filter((item) =>{
               if(item.id !== id){
                   return item
               }
           })
       })
    }
    render(){
        return (
            <div>
                <Input inputFun={this.inputFun}/>
                <TodoList value={this.state.toDos} deleteFun={this.deleteFun}/>
            </div>
        )
    }
}
export default Todo
