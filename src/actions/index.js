
// don't forget to link up with Reducers
export function increaseCounter(){
  return {
    type:"INCREASE_COUNTER"
  }
}

export function decreaseCounter(){
  return {
    type:"DECREASE_COUNTER"
  }
}


export function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
  }
}

export function addUser(user){
  return {
    type:"ADD_USER",
    value:user
  }
}
export function removeUser(user){
  return {
    type:"REMOVE_USER"
  }
}

export function setCurrentCity(txt){
  return {
    type:"SET_CURRENT_CITY",
    value:txt
  }
}

export function setCurrentTemp(txt){
  return {
    type:"SET_CURRENT_TEMP",
    value:txt
  }
}


export function searchText(txt){
  return {
    type:"SET_SEARCH_TEXT",
    value:txt
  }
}

export function currentUserSort(txt){
  console.log("waht is txt in current user sort: " + txt)
  return {
    type:"SET_CURRENT_USER",
    value:txt
  }
}

export function setVideoURL(txt){
  console.log("what is video txt: " + txt)
  return {
    type:"SET_VIDEO_URL",
    value:txt
  }
}


export function setVideoScale(txt){
  console.log("what is video scale: " + txt)
  return {
    type:"SET_VIDEO_SCALE",
    value:txt
  }
}
