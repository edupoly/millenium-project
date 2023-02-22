import Cleaning from "./Cleaning";
import General from "./General";
import Puncture from "./Puncture";
import { connect } from "react-redux";
import AirCondition from "./AirCondition";
function Booking() {
  return(
    <div className="bg-light p-4">
      <div className="container">
        <h1>Booking....</h1>
        <Puncture></Puncture>
        <Cleaning></Cleaning>
        <General></General>
        <AirCondition></AirCondition>
      </div>
    </div>
  )
}
function mapStateToProps(state){
  return state
}
function mapDispatchToProps(dispatch){
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Booking)