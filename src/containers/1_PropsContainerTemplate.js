import {connect} from "react-redux";

import compentName from "../components/Users";


// map a prop called text to the state
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter:state.searchText
  }
}



export default connect(mapStateToProps)(Users);
