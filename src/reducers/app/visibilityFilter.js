/**
 * Created by Administrator on 2017/12/27.
 */
export const visibilityFilter =(state='SHOW_ALL',action) =>{
    switch(action.type){
        case "SET_VISIBILITY_FILTER":
            return action.filter
        default:
            return state
    }
}