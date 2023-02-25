import { Outlet } from "react-router-dom"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const steps = [
  'User Details',
  'Create an ad group',
  'Create an ad',
];
function BookingDashboard(props) {
  const [step, setStep] = useState(3)
  useEffect(()=>{
    setStep(props.booking.step)
  },[props.booking.step])
  return (
    <div className="container mt-4">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Outlet></Outlet>
    </div>
  )
}
export default connect(store=>store)(BookingDashboard)