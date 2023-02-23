const initialState={
  booking:{
    fullname:'',
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
  if(action.type==='UPDATEDETAILS'){
    var {fullname,mobile,regNumber,carType}=action.payload;
    return {...state,booking:{...state.booking,fullname:fullname,mobilenumber:mobile,cartype:carType,carnumber:regNumber}}
  }
  return state
}
export default bookingReducer