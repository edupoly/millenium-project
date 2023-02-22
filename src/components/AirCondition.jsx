import { useEffect, useState } from "react"
import { serviceTypeCost } from "../store/pricelist"
import { connect } from "react-redux"
function AirCondition(props) {
  var [acSerTypes,setAcSerTypes]=useState([])
  useEffect(()=>{
    var t = Object.keys(serviceTypeCost.AC);
    setAcSerTypes([...t])
  },[])
  function handleAC(e){
    console.log(props.booking.booking.AC)
    var t = props.booking.booking.serviceList.AC?[...props.booking.booking.serviceList.AC]:[];
    if(e.target.checked){
      t.push(e.target.value)
    }
    else{
      var i = t.indexOf(e.target.value);
      t.splice(i,1)
    }
    props.dispatch({type:'UPDATEBOOKING',payload:{...props.booking.booking.serviceList,AC:[...t]}})
  }
  return (
    <div className=" border border-2 border-danger p-2 m-2">
      <h1>AirCondition</h1>
      {
        acSerTypes.map((s)=>{
          return <><input type='checkbox' value={s} name='acSerTypes' onChange={handleAC}></input>:{s}</>
        })
      }
    </div>
  )
}
export default connect(store=>store)(AirCondition)
