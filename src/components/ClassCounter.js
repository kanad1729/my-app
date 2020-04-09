import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props){
        super();

        this.state = {
            count: 0
        }
    }

   
    increamentCount = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increamentCount}>
                    Inctement {this.state.count}
                </button>
            
            </div>
        )
    }
}

export default ClassCounter
