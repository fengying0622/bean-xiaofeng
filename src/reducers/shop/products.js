/**
 * Created by Administrator on 2018/1/4.
 */
//商品数量减一函数
/*const products = (state,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...products,
                inventory:state.inventory-1
            }
        default:
            return state
    }
}*/

export const getProductsList = (state = [], action) => {
    switch (action.type) {
        case "RECEIVE_PRODUCTS":
            console.log(action)
             return action.products;
        default:
            return state
    }
}
