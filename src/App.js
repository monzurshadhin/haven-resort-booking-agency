import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AddOffer from "./Components/AddOffer/AddOffer";
import BookingOffer from "./Components/BookingOffer/BookingOffer";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import ManageBooking from "./Components/ManageBooking/ManageBooking";
import MyBookings from "./Components/MyBookings/MyBookings";
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
          <PrivateRoute exact path="/addoffer">
          <AddOffer></AddOffer>
          </PrivateRoute>
          <PrivateRoute exact path="/booking/:id">
          <BookingOffer></BookingOffer>
          </PrivateRoute>
          <PrivateRoute exact path="/my-bookings">
          <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute exact path="/manage-bookings">
          <ManageBooking></ManageBooking>
          </PrivateRoute>
          <Route exact path="/login">
          <Login></Login>
          </Route>
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
