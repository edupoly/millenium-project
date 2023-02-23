import { Outlet } from "react-router-dom"

function BookingDashboard() {
  return (

    <div className="container">
      <h1>BookingDashboard</h1>
      <Outlet></Outlet>
    </div>
  )
}
export default BookingDashboard