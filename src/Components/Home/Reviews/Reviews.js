import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useOffers from "../../../Hooks/useOffers";
// npm install swiper@6.8.4
import './Reviews.css';

const Reviews = () => {
  const [reviews ,setReviews] = useState([]);
  const { isLoading } = useOffers();
  useEffect(()=>{
    fetch('https://shielded-bastion-47032.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  if (isLoading) {
    return (
      <div>
         <h2 className="section-title text-center my-4">
        What Our Client Say About Us
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
    <div className="container my-5" id="reviews">
      <h2 className="section-title text-center my-4">
        What Our Client Say About Us
      </h2>
      <Swiper
      
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        navigation={true}
      
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          reviews.map(review => (
            <SwiperSlide key={review._id}>
          <div className="mx-auto">
          <div className="review-card">
            <div className="d-flex justify-content-center">
              <img
                className="swiper-card-img my-4"
                src={review.img}
                alt=""
              />
            </div>
            <div className="text-center w-50 mx-auto mb-5">
              <p>
                {review.review}
              </p>
              
              <h5>{review.reviewer}</h5>
              
            </div>
          </div>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Reviews;
