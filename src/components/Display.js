import React, { Component } from 'react'

export class Display extends Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
        <div id='display'className='calculator__display'>
            {this.props.state.ans===''?this.props.state.formula.concat(this.props.state.current):this.props.state.ans}
        </div>
    )
  }
}

export default Display
