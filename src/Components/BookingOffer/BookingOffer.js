import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/useAuth";
import "./BookingOffer.css";


const BookingOffer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  const notify = () => toast("Resort booked successfully!");
  const { register,reset, handleSubmit,setFocus, watch, formState: { errors } } = useForm();
  const {user} = useAuth();
  useEffect(() => {
    fetch(`https://shielded-bastion-47032.herokuapp.com/selectedOffer/${id}`)
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);
  
  useEffect(()=>{
    setFocus("offerName");
  },[setFocus]);

  const onSubmit = data => {
      data.status= 'pending';
      data.img= offer.img;
    fetch("https://shielded-bastion-47032.herokuapp.com/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data)
      })
      .then((res) => res.json())
      .then((result) => {
          if (result.insertedId) {
            
            notify();
            reset();
  
          
          }
        });
  };
  return (
    <div>
        <ToastContainer />
      <div className="container">
          
        <div className="row booking-section">
        <h3 className="text-center section-title mb-5">Book Now</h3>
          <div className="col-12 col-md-6">
            <img className="img-fluid w-100" src={offer.img} alt="" />
            <h3 className="mt-3">
              <b>{offer.name}</b>
            </h3>

            <div className="d-flex justify-content-between pe-3">
            <p className=" location">
              <i className="fas fa-map-marker-alt"></i> {offer.country}
            </p>
            <p className=" duration">
              <i className="fas fa-clock"> </i> {offer.time}
            </p>
            </div>

            <h3>
              <b>$ {offer.price}</b>
            </h3>
            <p className="details">{offer.description}</p>
          </div>
          <div className="col-12 col-md-6">
            
           
            <form className=" booking-form" onSubmit={handleSubmit(onSubmit)}>
              
              <input value={user.displayName} {...register("userName", { required: true })} />

              <input value={user.email} {...register("email", { required: true })} />

              <input defaultValue={offer.name} {...register("offerName",{ required: true })} />

              <input  {...register("address", { required: true })} placeholder="Address"/>

              <input  {...register("phone", { required: true })} placeholder="phone" />

              <input type="date"  {...register("date", { required: true })} placeholder="date" />

              
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input className="booking-btn" type="submit" value="Book now" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingOffer;
