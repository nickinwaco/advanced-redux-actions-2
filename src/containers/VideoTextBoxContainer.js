import {connect} from "react-redux";

import {setVideoURL} from "../actions/index";
import VideoTextBox from "../components/VideoTextBox";



function mapDispatchToProps (dispatch){
  return {
    set: function(text) {
      let action = setVideoURL(text)
      console.log("vidoe url action: "+ action)
      dispatch(action);
    }
  }

}


export default connect(null, mapDispatchToProps)(VideoTextBox);
