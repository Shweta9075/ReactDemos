import React, { Component } from 'react';
import Counter from './Counter'

class Hello extends Component {
    constructor(props){
        super(props);
        console.log("In constructor")
    }
    componentWillMount(){
        console.log("in component will mount")
    }
    componentDidMount(){
        console.log("In did mount");
    }
    render() {
        console.log(this.props)
        return (
            <>
                <h1>Hello {this.props.name}   </h1>
                <h2>Welcome</h2>
                <table>
                <td>
                <tr>
                Name
                </tr>
                </td>
                </table>
                </>
        );
    }
}

export default Hello;