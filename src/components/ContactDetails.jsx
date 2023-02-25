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
      props.dispatch({type:'UPDATESTEP',payload:1})
      navigate("services")
    }
  })
  return (
    <div className="m-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="row w-75 mx-auto">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Full Name</label>
            <input className="form-control" type="text" name="fullname" onChange={formik.handleChange} placeholder="Full Name"/><br/>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input className="form-control" type="text" name="mobile" onChange={formik.handleChange} placeholder="Mobile Number"/><br/>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input className="form-control" type="text" name="regNumber" onChange={formik.handleChange} placeholder="Reg Number"/><br/>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <div className="form-control">
              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" name="carType" onChange={formik.handleChange} value="hb"/>
                <label class="form-check-label" for="inlineRadio1">:Hatchback</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="radio"class="form-check-input"  name="carType" onChange={formik.handleChange} value="co"/>
                <label class="form-check-label" for="inlineRadio2">:Crossover</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="carType" onChange={formik.handleChange} value="sd"/>
                <label class="form-check-label" for="inlineRadio3">:Sedan</label>
              </div>
              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input"  name="carType" onChange={formik.handleChange} value="suv"/>
                <label class="form-check-label" for="inlineRadio3">:SUV</label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success">Go to Next</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}
export default connect(store=>store)(ContactDetails)