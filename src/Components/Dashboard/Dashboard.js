import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AddOffer from "../AddOffer/AddOffer";
import AdminRoute from "../AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageBooking from "../ManageBooking/ManageBooking";
import MyBookings from "../MyBookings/MyBookings";
import './Dashboard.css';

const Dashboard = () => {
    // const { window } = props;
  const [isActive, setIsActive] = useState("");
    const { user, logOut,admin } = useAuth();
  let { path, url } = useRouteMatch();
//   console.log(path);

  const handleActive = (data) => {
    setIsActive(data);
  };
  return (
    <div className="dashboard">
        <div className="">
        <div className="row w-100 mx-0">
          <div className="col-12 col-md-3  link-part" style={{marginTop:"100px"}}>
          <Link
          className="d-block my-2"
        style={{ textDecoration: "none", color: "black",textAlign:"center" }}
        to="/home"
      >
        Home
      </Link>

      <Link className="d-block my-2"
        style={{ textDecoration: "none", color: "black",textAlign:"center" }} to={`${url}`}>
        My Booking
      </Link>
     

    {
    admin && (
       <>
        <Link
        className="d-block my-2"
        style={{ textDecoration: "none", color: "black",textAlign:"center" }}
        to={`${url}/makeAdmin`}
      >
        Make Admin
      </Link>
      <Link
        className="d-block my-2"
        style={{ textDecoration: "none", color: "black",textAlign:"center" }}
        to={`${url}/addResort`}
      >
        Add Resort
      </Link>
      <Link
        className="d-block my-2"
        style={{ textDecoration: "none", color: "black",textAlign:"center" }}
        to={`${url}/manageBooking`}
      >
        Manage Booking
      </Link>
       </>
    )
    }
       
     
          </div>
          <div className="col-12 col-md-9 main-part">
          <Switch>
          <Route exact path={path}>
            <MyBookings></MyBookings>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addResort`}>
            <AddOffer></AddOffer>
          </AdminRoute>
          <AdminRoute path={`${path}/manageBooking`}>
            <ManageBooking></ManageBooking>
          </AdminRoute>

          {/* <AdminRoute path={`${path}/addDoctor`}>
            <AddDoctor></AddDoctor>
          </AdminRoute> */}
        </Switch>
          </div>
      </div>
        </div>
    </div>
  );
};

export default Dashboard;
