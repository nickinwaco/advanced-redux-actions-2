import {connect} from "react-redux";

import {addUser, removeUser} from "../actions/index";
import UserButtons from "../components/UserButtons";

 

function mapDispatchToProps (dispatch){
  return {
    add: function() {
      let action = addUser()
      dispatch(action);
    },
    remove: function(){
      let action = removeUser()
      dispatch(action);
    }
  }

}


export default connect(null, mapDispatchToProps)(UserButtons);
