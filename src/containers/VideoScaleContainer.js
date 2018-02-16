import {connect} from "react-redux";

import {aaasetVideoScale} from "../actions/index";
import ScaleVideo from "../components/ScaleVideo";



function mapDispatchToProps (dispatch){
  return {
    set: function(txt) {
      let action = aaasetVideoScale(txt)
  console.log("what is the action of scale?: " + action.type)
      dispatch(action);
    }
  }

}


export default connect(null, mapDispatchToProps)(ScaleVideo);
