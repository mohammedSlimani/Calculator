import React, { Component } from 'react'
import Buttons from './Buttons';
import Display from './Display';

const isOp = /[*/+-]/

export class Calculator extends Component {
    constructor(props){
        super(props);
        this.state={
          formula:'', // The forula the user is currently typing
          current:'0', //This is my buffer 
          ans:'',
        }
        this.equalsPressed = this.equalsPressed.bind(this);
        this.numberPressed = this.numberPressed.bind(this);
        this.opPressed = this.opPressed.bind(this);
        this.decimalPressed = this.decimalPressed.bind(this);
        this.reset = this.reset.bind(this);
      }
      
      equalsPressed(){
        //prosess the formula and show the answer
        let expression = this.state.formula;
        if(!isOp.test(this.state.current)){
          expression = expression.concat(this.state.current);
        }
        console.log(expression);
        //if(expression[0]==='0') expression.split().splice(0,1).join('');
        let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
        console.log("I am here after the eval");
        this.setState({
          ans:answer.toString(),
          formula:'',
          current:'',
        })
      }
      
      numberPressed(e){
        if(this.state.ans!==''){
          //a new operation is about to get started!
          this.setState({
            formula:'',//reset the formula
            ans:'',//to communicate to the display to start diplayiong the formula not the answer
          })
        }else{ // I am still in the same formula 
          if(isOp.test(this.state.current)){
            this.setState({
              formula:this.state.formula + this.state.current,
              current:e.target.value,
            })
          }else{
            if(this.state.current!=='0'){
              this.setState({
                current:this.state.current + e.target.value
              })
            }else{
              this.setState({
                current:e.target.value
              })
              
            }  
          }
        }
      }
    
      opPressed(e){
        if(this.state.ans !==''){
          this.setState({
            formula:this.state.ans, // The user is trying to start off the bat with an op. So the number by deafult is 0
            ans:'',
            current:e.target.value
          })
        }else{
          if(isOp.test(this.state.current)){
            this.setState({
              current:e.target.value
            })
          }else{
            this.setState({
              formula:this.state.formula + this.state.current,
              current:e.target.value
            })
          }
        }
      }
    
      decimalPressed(){
        if(!this.state.current.includes('.')){
          this.setState({
            current:this.state.current.concat('.')
          })
        }
      }
    
      reset(){//when the user presses AC
        this.setState({
           formula:'',
           ans:'',
           current:'0'
        })
      }
      render(){
        
        return(
          <div className='calculator'>
            <Display state={this.state}/>
            <Buttons  eq={this.equalsPressed}
                    op={this.opPressed}
                    num={this.numberPressed}
                    ac={this.reset}
                    dec={this.decimalPressed}/>
          </div>
        )
      }
}

export default Calculator
