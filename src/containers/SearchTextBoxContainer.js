import { connect } from 'react-redux';
import {searchText} from "../actions";
import SearchTextBox from "../components/SearchTextBox";


function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     let action = searchText(txt);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(SearchTextBox);
