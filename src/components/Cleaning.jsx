import React, { useEffect } from "react";
import { connect } from "react-redux";
import { serviceTypeCost } from "../store/pricelist";

function Cleaning(props) {
  var [cleanTypes,setCleanTypes]=React.useState([])

  useEffect(()=>{
    var t = Object.keys(serviceTypeCost.Cleaning)

    setCleanTypes([...t])
  },[])
  function handleCleaning(e){
    console.log(props.booking.booking.Cleaning)
    var t = props.booking.booking.serviceList.Cleaning?[...props.booking.booking.serviceList.Cleaning]:[];
    if(e.target.checked){
      t.push(e.target.value)
    }
    else{
      var i = t.indexOf(e.target.value);
      t.splice(i,1)
    }
    props.dispatch({type:'UPDATEBOOKING',payload:{...props.booking.booking.serviceList,Cleaning:[...t]}})
  }
  return (
    <div className=" border border-2 border-success p-2 m-2">
      <h1>Cleaning</h1>
      <div>
        {
          cleanTypes.map((type)=>{
            return  <><input type="checkbox" name="tubetype" value={type} onChange={handleCleaning}/>:{type}</>
          })
        }

      </div>
    </div>
  )
}
export default connect(store=>store)(Cleaning)