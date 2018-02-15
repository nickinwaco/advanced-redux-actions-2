import {connect} from "react-redux";

import VideoPlayer from "../components/VideoPlayer";


// map a prop called text to the state
function mapStateToProps(state){
  return {
    url: state.videoURL,
    scale: state.videoScale,
  }
}



export default connect(mapStateToProps)(VideoPlayer);
