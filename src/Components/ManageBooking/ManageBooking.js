import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [modifiedCount,setModifiedCount] = useState(0);
  const notify = () => toast("Booking Approved successfully!");
  const notify1 = () => toast("Booking canceled successfully!");
  useEffect(() => {
      fetch('https://shielded-bastion-47032.herokuapp.com/bookings')
      .then(res =>res.json())
      .then(data=>{
        setBookings(data);
        setModifiedCount(0);
      });
  }, [modifiedCount]);
  const handleStatus = (id) =>{
    const url = `https://shielded-bastion-47032.herokuapp.com/booking/update/${id}`;
    const data = { status: 'approved'};
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
          setModifiedCount(data.modifiedCount);
          notify();
        });

  }

  useEffect(() =>{
    AOS.init();
    },[]);
    

  const handleDelete = (id) => {
    console.log(id);

    const proceed = window.confirm("are you sure to cancel?");
    if (proceed) {
      const url = `https://shielded-bastion-47032.herokuapp.com/booking/delete/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log(data);
            const remaining = bookings.filter(
              (appointment) => appointment._id !== id
            );
            setBookings(remaining);
            notify1();
          }
        });
    }
  };
  
  return (
    <div>
         <ToastContainer />
        <div className="container manage-bookings">
        <h2 className="text-center my-4 section-title">
          Manage all <span>Bookings</span>
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4 my-4">
        {bookings.map((booking) => (
            <Col key={booking._id} data-aos="zoom-in" data-aos-delay="200">
            <Card className="offer-card">
            <div className="img-section">
              <Card.Img variant="top" src={booking.img} />
              </div>
              <Card.Body>
                <Card.Title className="booking-title">Resort :<span>{booking.offerName}</span></Card.Title>
                <Card.Text>
                <p>
                Name: {booking.userName}
              </p>
              <p>
                email: {booking.email}
              </p>
              <p>
                Date: {booking.date}
              </p>
              <p>
                <b>Status: <span className={booking.status==='pending'?'pending-color':'approved-color'}>{booking.status}</span></b>
              </p>
                </Card.Text>
              <div className="d-flex justify-content-between">
              <button
                className="d-md-block card-btn"
                onClick={() => {
                  handleStatus(booking._id);
                }}
              >
                Approve
              </button>

              <button
                className="d-md-block card-btn"
                onClick={() => {
                  handleDelete(booking._id);
                }}
              >
                Cancel
              </button>
              </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </div>
    </div>
  );
};

export default ManageBooking;
