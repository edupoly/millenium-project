import React, { useEffect } from "react";
import { connect } from "react-redux";
import { serviceTypeCost } from "../store/pricelist";

function General(props) {
  var [genTypes,setGenTypes]=React.useState([])
  useEffect(()=>{
    var t = Object.keys(serviceTypeCost.General)
    setGenTypes([...t])
  },[])
  function handleGen(e){
    props.dispatch({type:'UPDATEBOOKING',payload:{...props.booking.booking.serviceList,General:[e.target.value]}})
  }
  return (
    <div className=" border border-2 border-danger p-2 m-2">
      <h1>General</h1>
      <div>
        {
          genTypes.map((type)=>{
            return  <><input type="radio" name="genType" value={type} onChange={handleGen}/>:{type}</>
          })
        }
      </div>
    </div>
  )
}
export default connect(store=>store)(General)