/**
 * Created by Administrator on 2018/1/3.
 */
import React from 'react';
import {connect} from "react-redux";

import ProductItem from '../../components/shop/ProductItem'

class ProductsContainer extends React.Component{
    render(){
        console.log(this.props);
        const products = this.props.products;
        return (
            <div>
                <h1>products</h1>
                {
                    products.map((item)=><ProductItem product={item} key={item.id} />)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products:state.getProductsList
    }
}
export default ProductsContainer = connect (
    mapStateToProps
)(ProductsContainer);
