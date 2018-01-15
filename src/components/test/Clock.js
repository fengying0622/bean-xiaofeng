/**
 * Created by Administrator on 2018/1/12.
 */
import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date : new Date()
        }
    }
    tick() {
        this.setState({
            date : new Date()
        })
    }

    componentDidMount() {
        setInterval(()=>{
            this.tick(),1000
        })
    }

    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Clock