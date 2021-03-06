/**
 * Created by Administrator on 2017/12/27.
 */
import React from "react"
import FilterLink from "../../containers/app/FilterLink"

const Footer =()=>(
    <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </p>
)
export default Footer