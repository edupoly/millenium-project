import { connect } from "react-redux";
import { serviceTypeCost } from "../store/pricelist";
function Billing(props) {
  console.log(props)
  var booking = props.booking.booking;
                    
  var bill = [];
  var selectedServices=Object.keys(booking.serviceList);
  selectedServices.forEach((s)=>{
    var billServiceItem={
      [s]:[]
    }
    console.log(booking.serviceList[s])
    booking.serviceList[s].forEach((st)=>{
      billServiceItem[s].push({[st]:serviceTypeCost[s][st][booking.cartype]})
    })
    bill.push(billServiceItem)
  })
  console.log(bill)
  return (
    <div>
      <h1>Billing</h1>
    </div>
  )
}
export default connect(store=>store)(Billing)