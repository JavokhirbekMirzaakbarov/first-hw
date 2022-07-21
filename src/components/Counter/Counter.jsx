import React from 'react'
import "./styles.scss";

export default class Counter extends React.Component {
    constructor(){
        super();
        this.state ={count: 0 };
    }

     decrementCount (){
      if(this.state.count < 1) 
        alert("You cannot decrement less than 0!");
      else this.setState({count: this.state.count -1});
    }

    incrementCount() {
      this.setState({count: this.state.count + 1})
    }

  render() {
    return (
    <div className='counter'>
      <div>
        <button onClick={()=> this.incrementCount()}>+</button>
      </div>
      <div>{this.state.count}</div>
      <div>
        <button onClick={() => this.decrementCount()}>-</button>
      </div>
    </div>
    )
  }
}
