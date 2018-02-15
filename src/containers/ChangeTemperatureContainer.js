import { connect } from 'react-redux';
import {setCurrentTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     let action = setCurrentTemp(txt);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(ChangeTemperature);
