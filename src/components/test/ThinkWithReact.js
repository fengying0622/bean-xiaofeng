/**
 * Created by Administrator on 2018/1/8.
 */
import React from "react";

var productsTest = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filterText: '',
            inStockOnly: false
        }
    }
    handleFilterTextInput=(filterText)=>{
        this.setState({
            filterText : filterText
        })
    }


    handleInStockInput=(inStockOnly)=>{
        this.setState({
            inStockOnly : inStockOnly
        })
    }

    render(){
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={productsTest}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

class SearchBar extends React.Component{

    handleFilterTextInputChange=(event)=>{
        this.props.onFilterTextInput(event.target.value);
    }
    handleInStockInputChange=(event)=>{
        this.props.onInStockInput(event.target.checked);
    }

    render(){
        return (
            <form>
                <input type="text" placeholder="search..."
                       value={this.props.filterText}
                       onChange={this.handleFilterTextInputChange} />
                <br/>
                <input type="checkbox"
                       checked={this.props.inStockOnly}
                       onChange={this.handleInStockInputChange} />
                <span>Only show products in stock</span>
            </form>
        )

    }
}

class ProductTable  extends React.Component{
    render(){
        var rows =[];
        var lastCategory =null ;
        console.log(this.props.inStockOnly)
        this.props.products.forEach((product) =>{
            if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if(product.category !== lastCategory){
                (rows.push(<ProductCategoryRow category={product.category} key={product.category} />))
            }
            rows.push(<ProductRow product={product} key={product.name}/>)
            lastCategory = product.category;
        })
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

class ProductCategoryRow extends React.Component{
    render(){
        return (
            <tr><th>{this.props.category}</th></tr>
        )
    }
}

class ProductRow extends React.Component{
    render(){
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{color:'red'}}>{this.props.product.name}</span>

        return (

            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>

        )
    }
}



export default FilterableProductTable