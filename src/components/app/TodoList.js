/**
 * Created by Administrator on 2017/12/28.
 */
import Todo from "./Todo";
import React from "react";

export const TodoList = ({todos,onTodoClick}) =>(
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick = {() => onTodoClick(todo.id) }
            />
        )}
    </ul>
)

