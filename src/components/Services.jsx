import Cleaning from "./Cleaning";
import General from "./General";
import Puncture from "./Puncture";
import { connect } from "react-redux";
import AirCondition from "./AirCondition";
import { useNavigate } from "react-router-dom";
function Services(props) {
  var navigate=useNavigate();
  return(
    <div className="bg-light p-4 border border-success m-2">
      <div className="container">
        <h1>Services....</h1>
        <Puncture></Puncture>
        <Cleaning></Cleaning>
        <General></General>
        <AirCondition></AirCondition>
        <div className="d-flex justify-content-between">
          <button className="btn btn-danger" onClick={()=>{navigate("/booking")}}>Previous</button>
          <button className="btn btn-info" onClick={()=>{props.dispatch({type:'UPDATESTEP',payload:2});navigate("/booking/billing")}}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default connect((store)=>{return store})(Services)