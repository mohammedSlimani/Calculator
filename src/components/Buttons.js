import React, { Component } from 'react'

export class Buttons extends Component {
    constructor(props){
        super(props)
      }
      render(){
        return(
          <div className='calculator__keys'>
            <button id='add'       value ='+'  className='key--operator'  onClick={this.props.op}  >+</button>
            <button id='substract' value ='-'  className='key--operator'  onClick={this.props.op}  >-</button>
            <button id='multiply'  value ='*'  className='key--operator'  onClick={this.props.op}  >*</button>
            <button id='divide'    value ='/'  className='key--operator'  onClick={this.props.op}  >/</button>
            <button id='seven'     value ='7'                             onClick={this.props.num}  >7</button>
            <button id='eight'     value ='8'                             onClick={this.props.num}  >8</button>
            <button id='nine'      value ='9'                             onClick={this.props.num}  >9</button>
            <button id='four'      value ='4'                             onClick={this.props.num}  >4</button>
            <button id='five'      value ='5'                             onClick={this.props.num}  >5</button>
            <button id='six'       value ='6'                             onClick={this.props.num}  >6</button>
            <button id='one'       value ='1'                             onClick={this.props.num}  >1</button>
            <button id='two'       value ='2'                             onClick={this.props.num}  >2</button>
            <button id='three'     value ='3'                             onClick={this.props.num}  >3</button>
            <button id='zero'      value ='0'                             onClick={this.props.num}  >0</button>
            <button id='decimal'   value ='.'                             onClick={this.props.dec}  >.</button>
            <button id='clear'     value ='AC'                            onClick={this.props.ac}   >AC</button>
            <button id='equals'    value ='='  className='key--equal'     onClick={this.props.eq}  >=</button>
          </div>
        )
      }
}

export default Buttons