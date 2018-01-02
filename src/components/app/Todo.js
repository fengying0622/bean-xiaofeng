/**
 * Created by Administrator on 2017/12/28.
 */

import React from "react";

const Todo =({text, completed, onClick}) =>(
    <li onClick={onClick} style={{textDecoration:completed ? 'line-through' : 'none'}}>
        {text}
    </li>
)
export default Todo

