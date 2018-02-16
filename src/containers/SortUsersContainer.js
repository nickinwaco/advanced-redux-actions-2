import {connect} from "react-redux";

import {currentUserSort} from "../actions/index";
import SortUsers from "../components/SortUsers";



function mapDispatchToProps (dispatch){
  return {
    set: function(user) {
      let action = currentUserSort(user)
      dispatch(action);
    }
  }
}


export default connect(null, mapDispatchToProps)(SortUsers);
