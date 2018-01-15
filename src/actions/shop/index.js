/**
 * Created by Administrator on 2018/1/3.
 */
import shop from '../../api/shop'
const receiveProducts = (products) => {
    console.log(products);
    return  {
        type:"RECEIVE_PRODUCTS",
        products
    }
}
export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

const addToCartUnsafe = productId => ({
    type: "ADD_TO_CART",
    productId
})

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}