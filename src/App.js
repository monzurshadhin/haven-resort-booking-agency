import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import BookingOffer from "./Components/BookingOffer/BookingOffer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Header from './Components/Shared/Header/Header';
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          {/* <PrivateRoute exact path="/addoffer">
          <AddOffer></AddOffer>
          </PrivateRoute> */}
          <PrivateRoute exact path="/booking/:id">
          <BookingOffer></BookingOffer>
          </PrivateRoute>
          {/* <PrivateRoute exact path="/my-bookings">
          <MyBookings></MyBookings>
          </PrivateRoute> */}
          {/* <PrivateRoute exact path="/manage-bookings">
          <ManageBooking></ManageBooking>
          </PrivateRoute> */}
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/login">
          <Login></Login>
          </Route>
          <Route exact path="/register">
          <Register></Register>
          </Route>
          {/* <Route exact path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
          </Route> */}
          <Route exact path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
