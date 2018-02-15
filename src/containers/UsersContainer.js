import {connect} from "react-redux";

import Users from "../components/Users";


// map a prop called text to the state
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter:state.searchText
  }
}



//export default connect(mapStateToProps, mapDispatchToProps)(Users);

export default connect(mapStateToProps)(Users);
