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
    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    // let arr=state;
    // arr.pop();  <<< ---this works b/c there is a new array
    // return arr; //Readme says to use 'slice()'  b/c Redux doesn't allow you to edit the same state

    return state.slice(1); //use Slice b/c Redux doesn't allow you to edit the same state object
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
  if(action.type ==="SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

function searchText(state = "", action){
  if(action.type ==="SET_SEARCH_TEXT"){
    return action.value;
  }
return state;
}

function currentTemp(state = "", action){
  if(action.type ==="SET_CURRENT_TEMP"){
    return action.value;
  }
  return state;
}

function isLoading(state = "", action){
  if(action.type ==="SET_IS_LOADING"){
console.log("acion vlaue for isloading "+ action.value)
    return action.value;
  }
  return state;
}


function videoURL(state = "", action){
  if(action.type ==="SET_VIDEO_URL"){
    console.log("action.value url:  "+ action.value)
    return action.value;
  }
  return state;
}

function currentUserSort(state = "", action){
  if(action.type ==="SET_CURRENT_USER"){
    console.log("action.value:  "+ action.value)
    return action.value;
  }
  return state;
}

function videoScale(state = "", action){
  if(action.type ==="SET_VIDEO_SCALE"){
    console.log("action.value scale:  "+ action.value)
    return action.value;
  }
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
