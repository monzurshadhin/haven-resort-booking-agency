import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import useOffers from "../../../Hooks/useOffers";
import "./Offers.css";


const Offers = () => {
  const { offers, isLoading } = useOffers();
  // console.log(offers);

  useEffect(() =>{
    AOS.init();
    },[]);
    
  const history = useHistory();
  const handleBooking = (id) =>{
    history.push(`/booking/${id}`);
  }
  if (isLoading) {
    return (
      <div>
         <h2 className="section-title text-center my-4">
         Our Resorts
      </h2>
      <div className="d-flex justify-content-center spinner spinner-section">
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
      </div>
      
    );
  }
  return (
    <div className="container my-4" id="offers">
      <h2 className="text-center mt-3 mb-4 section-title ">Our Resorts</h2>

      <Row xs={1} md={2} lg={3} className="g-4" >
        {offers.map((offer) => (
          <Col key={offer._id} data-aos="fade-up" data-aos-delay="300">
            <Card className="offer-card">
              <div className="img-section">
                <Card.Img variant="top" src={offer.img} />
              </div>
              <Card.Body className="offer-body">
                <Card.Title className="name">
                  <b>{offer.name}</b>
                </Card.Title>

                <Card.Text>{offer.description.slice(0, 170)}</Card.Text>
              </Card.Body>

              <p className="mx-4 location">
                <i className="fas fa-map-marker-alt"></i> {offer.country}
              </p>
              <p className="mx-4 duration">
                <i className="fas fa-clock"> </i> {offer.time}
              </p>

              <div className="offer-bottom d-flex justify-content-between m-4 align-items-center">
                <h4>
                  <b>$ {offer.price}</b>
                </h4>
                <button onClick={()=>handleBooking(offer._id)} className="card-btn">Book Now</button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Offers;
