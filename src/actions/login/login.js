/**
 * Created by Administrator on 2017/12/29.
 */
let nextTodoId = 0;
export const login = (name, password) => {
    //console.log(name + password);
    return {
        type: "ADD_USER",
        id: nextTodoId++,
        name,
        password
    }
}