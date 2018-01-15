/**
 * Created by Administrator on 2018/1/3.
 */
import React from "react"
const Product = ({title,price,quantity}) => (
    <div>
        {title} -- {price}{quantity ? '*quantity' : null}
    </div>
)
export default Product