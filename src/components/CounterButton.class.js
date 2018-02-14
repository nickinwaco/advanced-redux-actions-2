import React from 'react';

import {connect} from "react-redux";
import {component} from "react";

class CounterButton extends component {
  state = {};
render(){
  return (
      <div>
        <button onClick={
          ()=>{
            if(this.state.increase){
              this.state.increase();
            }
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            if(this.state.increase){
              this.state.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}
}

function mapDispatchToProps (dispatch) {

  return{
    dispatch({type: increase})
  }
}

const CounterButton1 = connect(mapDispatchToProps)(CounterButton)


export default CounterButton1;
