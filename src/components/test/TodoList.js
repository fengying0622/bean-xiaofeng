/**
 * Created by Administrator on 2018/1/19.
 */
import React from "react"

class TodoList extends React.Component{

    clickHandler = (id) =>{
        this.props.deleteFun(id)
    }
    render(){
        let toDos = this.props.value;
        console.log(toDos)
        return(
            <ul>
                {toDos.map((item,index)=>{
                    return <li key={index}  onClick={()=>this.clickHandler(item.id)}>{item.text}</li>
                })}
            </ul>
        )
    }
}
export default TodoList