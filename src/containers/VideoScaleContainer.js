import {connect} from "react-redux";

import {setVideoScale} from "../actions/index";
import ScaleVideo from "../components/ScaleVideo";



function mapDispatchToProps (dispatch){
  return {
    set: function(txt) {
      let action = setVideoScale(txt)
  console.log("what is the action of scale?: " + action)
      dispatch(action);
    }
  }

}


export default connect(null, mapDispatchToProps)(ScaleVideo);
