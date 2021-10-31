import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useOffers from "../../Hooks/useOffers";
import './AddOffer.css';

const AddOffer = () => {
    const {offers} = useOffers();
    const notify = () => toast("Resort Added successfully!");
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      data.sId = offers.length +1;
    // send new added offer data to database 
    fetch("https://shielded-bastion-47032.herokuapp.com/offers", {
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
        <div className="add-offer">
            <h3 className="section-title text-center my-4">Add Resort</h3>
            {/* add resort form  */}
          <form className=" booking-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-md-6">
                <input
                  {...register("name", { required: true })}
                  placeholder="resort name"
                />

                <input
                  {...register("country", { required: true })}
                  placeholder="country"
                />

                <input
                  {...register("time", { required: true })}
                  placeholder="duration"
                />
              </div>
              <div className="col-12 col-md-6">
                
            <input
              {...register("img", { required: true })}
              placeholder="image url"
            />

            <input
              {...register("price", { required: true })}
              placeholder="price" type="number"
            />

            <textarea
              {...register("description", { required: true })}
              placeholder="description"
            />

              </div>
            </div>


            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className="booking-btn" type="submit" value="Add now" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOffer;
