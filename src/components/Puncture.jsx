import React, { useEffect } from "react";
import { connect } from "react-redux";
import { serviceTypeCost } from "../store/pricelist";

function Puncture(props) {
  console.log("Props in puncture:",props.booking.booking)
  var [punTypes,setPunTypes]=React.useState([])
  useEffect(()=>{
    var t = Object.keys(serviceTypeCost.Puncture)
    setPunTypes([...t])
  },[])
  function handlePuncher(e){
    props.dispatch({type:'UPDATEBOOKING',payload:{...props.booking.booking.serviceList,Puncture:[e.target.value]}})
  }
  return (
    <div className=" border border-2 border-danger p-2 m-2">
      <h1>Puncture</h1>
      <div>
        {
          punTypes.map((type)=>{
            return  <><input type="radio" name="tubetype" value={type} onChange={handlePuncher}/>:{type}</>

          })
        }

      </div>
    </div>
  )
}
export default connect(store=>store)(Puncture)