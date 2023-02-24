import { connect } from "react-redux";
import React,{useEffect,useState} from 'react'
import { serviceTypeCost } from "../store/pricelist";
import { Link } from "react-router-dom";
function Billing(props) {
  const [bill, setBill] = useState([])
  const [billTotal, setBillTotal] = useState(0);
  const [agree, setAgree] = useState(false)
  useEffect(()=>{
    var booking = props.booking.booking;
    var selectedServices=Object.keys(booking.serviceList);
    var temp = [];
    var sum =0;
    
    selectedServices.forEach((s)=>{
      var billServiceItem={
        [s]:[]
      }
      booking.serviceList[s].forEach((st)=>{
        sum = sum+serviceTypeCost[s][st][booking.cartype];
        billServiceItem[s].push({[st]:serviceTypeCost[s][st][booking.cartype]})
      })
      temp.push(billServiceItem)
    })
    console.log("temp",temp)
    console.log("sum",sum)
    setBill([...temp])
    setBillTotal(sum)
  },[props.booking.booking])
  function total(c){
    setBillTotal(billTotal+c)
  }
  return (
    <div>
      <h1>Billing</h1>
      <ul>
        {
          bill&& bill.map((st,i)=>{
            return <li key={i}>
                {Object.keys(st)[0]}
                <ul>
                  {st[Object.keys(st)[0]].map((s,i)=>{
                    return <li>{Object.keys(s)[0]}:{s[Object.keys(s)[0]]}</li>
                  })}
                </ul>
              </li>
          })
        }
      </ul>
      <h1>TotalBill:{billTotal}</h1>
      <input type="checkbox" onChange={(e)=>{setAgree(e.target.checked)}}/> I Aggree the above billing and here by confirming the TOTAL
      <br />
      <Link to={`/booking/payment/${billTotal}`}>
        <button disabled={!agree} className='btn btn-success'>Approve and Pay</button>
      </Link>
    </div>
  )
}
export default connect(store=>store)(Billing)