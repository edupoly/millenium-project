import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Booking from './components/Services';
import BookingDashboard from './components/BookingDashboard';
import ContactDetails from './components/ContactDetails';
import Services from './components/Services';
import Billing from './components/Billing';
import Payment from './components/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"/booking",
        element:<BookingDashboard></BookingDashboard>,
        children:[
          {
            path:"/booking",
            element:<ContactDetails></ContactDetails>
          },
          {
            path:"/booking/services",
            element:<Services></Services>
          },
          {
            path:"/booking/billing",
            element:<Billing></Billing>
          },
          {
            path:"/booking/payment",
            element:<Payment></Payment>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
