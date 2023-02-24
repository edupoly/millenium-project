import { useParams } from "react-router-dom"
import React,{useState,useEffect} from 'react';

function Payment() {
  var bill=useParams();
  console.log(bill)
  return (
    <div>
      <h1>Payment</h1>
      <h3 className="disabled">Amount:{bill.amount}</h3>
      
    </div>
  )
}
export default Payment