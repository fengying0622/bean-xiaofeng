/**
 * Created by Administrator on 2018/1/12.
 */
import React from "react"

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isToggle: true
//         }
//     }
//
//     handleClick = (isToggle) =>{
//         this.setState({
//             isToggle : !isToggle
//         })
//     }
//
//
//     render() {
//         console.log(this.state)
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggle ? 'ON' :'OFF'}
//             </button>)
//     }
//
// }
// export default Toggle

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = ()=> {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        console.log(this.state)
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle
