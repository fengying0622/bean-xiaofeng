/**
 * Created by Administrator on 2017/12/27.
 */
import {combineReducers} from "redux";
import {todos} from "./app/todo";
import {userData} from "./login/login"
import {visibilityFilter} from "./app/visibilityFilter";
import {getProductsList} from "./shop/products"
//import {getProducts} from "./shop/products";

//新的状态集合，存在state里，可以直接调用
const todoAPP = combineReducers({
    todos,
    visibilityFilter,
    userData,
    getProductsList
})
export default todoAPP