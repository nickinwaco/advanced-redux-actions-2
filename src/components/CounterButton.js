import React from 'react';

import {increaseCounter, decreaseCounter} from "../actions";
import {connect} from "react-redux";

function CounterButton(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.increase){
              props.increase();
            }
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            if(props.increase){
              props.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}


// this could/should be put in a Container
function mapDispatchToProps(dispatch) {
  return {
    increase: () => {
      let action = increaseCounter()  // this is imported from Actions & the RESULT of the function
      dispatch(action);
    },
    decrease: () => {
      let action = decreaseCounter()  //is the RESULT of the function in /actions/index.js
      dispatch(action);
    }

  }
}

export default connect(null, mapDispatchToProps)(CounterButton);
