import {connect} from "react-redux";

import {addUser, removeUser} from "../actions/index";
import UserButtons from "../components/UserButtons";



function mapDispatchToProps (dispatch){
  return {
    add: function(user) {
      let action = addUser(user)
      dispatch(action);
    },
    remove: function(){
      let action = removeUser()
      dispatch(action);
    }
  }

}


export default connect(null, mapDispatchToProps)(UserButtons);
