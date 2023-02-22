const initialState={
  booking:{
    mobilenumber:'',
    carnumber:'',
    cartype:'',
    serviceList:{}
  }
}
function bookingReducer(state=initialState,action){
  if(action.type==='UPDATEBOOKING'){
    return {...state,booking:{...state.booking,serviceList:{...action.payload}}}
  }
  return state
}
export default bookingReducer