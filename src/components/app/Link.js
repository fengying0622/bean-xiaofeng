/**
 * Created by Administrator on 2017/12/28.
 */
import React from "react"
const Link =({active, onClick, children}) => {
    if(active){
        return <span>{children}</span>
    }
    return <a onClick= {(e) => {
            e.preventDefault()
            onClick()
                }
            }
        >
        {children}
        </a>
}
export default Link