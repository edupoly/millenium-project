import { useFormik } from "formik"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"

function ContactDetails(props) {
  var navigate=useNavigate();

  var formik = useFormik({
    initialValues:{
      fullname:'',
      mobile:'',
      regNumber:'',
      carType:''
    },
    onSubmit:(values)=>{
      props.dispatch({type:'UPDATEDETAILS',payload:values})
      navigate("services")
    }
  })
  return (
    <div>
      <h1 className="text-center">ContactDetails</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-wrap justify-content-center">
            
          <div className="p-2">
            <b>FullName:</b>
            <br></br>
            <input type="text" name="fullname" onChange={formik.handleChange} placeholder="Full Name"/><br/>
            <b>Mobile:</b>
            <br></br>
            <input type="text" name="mobile" onChange={formik.handleChange} placeholder="Mobile Number"/><br/>
            <b>Registration:</b>
            <br></br>
            <input type="text" name="regNumber" onChange={formik.handleChange} placeholder="Reg Number"/><br/>
          </div>
          <div className="p-2">
            <b>Cart Type</b>
            <br></br>
            <input type="radio" name="carType" onChange={formik.handleChange} value="hb"/>:Hatchback<br/>
            <input type="radio" name="carType" onChange={formik.handleChange} value="co"/>:Crossover<br/>
            <input type="radio" name="carType" onChange={formik.handleChange} value="sd"/>:Sedan<br/>
            <input type="radio" name="carType" onChange={formik.handleChange} value="suv"/>:SUV<br/>
            <button type="submit" className="btn btn-success">Next</button>
          </div>
        </div>
       
       
        
      </form>
    </div>
  )
}
export default connect(store=>store)(ContactDetails)