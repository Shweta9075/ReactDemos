import React, { Component } from 'react';
import Hello from './Hello';

class Counter extends Component {
    constructor(){
        super();
        console.log("In constructor");
        this.state={count:0, name:""}
    }

    componentWillMount(){
        console.log("in component will mount")
    }
    componentDidMount(){
        console.log("In did mount");
    }
    componentWillUpdate(){
        console.log("In component will update");
    }
    componentDidUpdate(){
        console.log("IN did update");
        document.title = 'clicked ${this.state.count} times'
    }
     handelClick =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handelName =(event)=>{
        this.setState({
                name:event.target.value
        })
    }
   
    render() {
        return (
            <div>
                <button onClick={this.handelClick}>Click {this.state.count}</button>
                <Hello name = "Shweta" />
                </div>
        );
    }
}

export default Counter;