/**
 * Created by Administrator on 2017/12/27.
 */
import {connect} from "react-redux";
import {toggleTodo} from "../../actions/app/index";
import {TodoList} from "../../components/app/TodoList";


const getVisbleTodos =(todos,filter)=>{
    switch(filter){
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

//mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
const mapStateToProps =(state)=>{
    return {
        todos:getVisbleTodos(state.todos, state.visibilityFilter)
        //todos:state.todos
    }
}

//用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。
// 它可以是一个函数，也可以是一个对象。如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数
const mapDispatchToProps ={
        onTodoClick : toggleTodo
}

//connect方法生成容器组件
const VisibleTodoList =connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList