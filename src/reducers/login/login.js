/**
 * Created by Administrator on 2017/12/29.
 */
export const userData = (state={},action) => {
    switch(action.type){
        case "ADD_USER":
            //console.log(action)
            return [
                ...state,
                {
                    id:action.id,
                    name:action.name,
                    password:action.password
                }
            ]
        default:
            return state
    }
}