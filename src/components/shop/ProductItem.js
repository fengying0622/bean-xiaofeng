/**
 * Created by Administrator on 2018/1/3.
 */
import Product from "./Product"
import React,{Component} from "react"

class ProductItem extends Component{
    componentDidMount() {
        console.log(this.props);
    }
    render(){
        const {product} = this.props;
        return (
            <div>
                <Product
                    title={product.title}
                    price={product.price}
                    quantity={product.inventory}/>
                <button>
                    {product.inventory>0 ? "ADD to Card" : "Sold Out"}
                </button>
            </div>
        )
    }
}


export default ProductItem