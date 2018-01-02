/**
 * Created by Administrator on 2017/12/28.
 */
import Link from "../../components/app/Link"
import { setVisibility } from '../../actions/app/index'
import {connect} from "react-redux"

const mapStateToProps =(state, ownProps) =>({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) =>({
    onClick: () => {
        dispatch(setVisibility(ownProps.filter))
    }
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink