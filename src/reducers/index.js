import {combineReducers} from "redux";


function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1;
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1;
  }
  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return state;
  }
  if(action.type === "REMOVE_USER"){
    return state;
  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state = "", action){
  return state;
}

function searchText(state = "", action){
  return state;
}

function currentTemp(state = "", action){
  return state;
}

function isLoading(state = "", action){
  return state;
}

function videoURL(state = "", action){
  return state;
}

function currentUserSort(state = "", action){
  return state;
}

function videoScale(state = "", action){
  return state;
}



const rootReducer = combineReducers({
  currentCount,
  users,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale,
});

export default rootReducer;
