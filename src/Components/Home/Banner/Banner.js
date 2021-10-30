import React from "react";
import { Carousel } from "react-bootstrap";
import Typical from "react-typical";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-section" id="home">
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            className="carousel-img d-block w-100"
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption className="caption">
            <h3 className="title">
              <b>Are you seeking for {" "}</b>
              <Typical
              loop={Infinity}
              wrapper="b"
                steps={[
                  "refreshment ?",
                  3000,
                  "peace ?",
                  3000
                ]}
                
              />
            </h3>

            <p>We are here to help you to find some peace</p>
            <button>View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="carousel-img d-block w-100"
            src="https://media.istockphoto.com/photos/perfect-place-for-vacation-picture-id1178022024?k=20&m=1178022024&s=612x612&w=0&h=iXm7yGYcFhuhCg_OoUgjpdzpoODF8xScMA5v3cahyHE="
            alt="Second slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="title"><b>Want to book a resort for your{" "}</b>
            <Typical
                steps={[
                  "holyday ?",
                  3000,
                  "event ?",
                  3000
                 
                ]}
                loop={Infinity}
                wrapper="b"
              />
              </h3>
            <p>We offer best price for any resort.</p>
            <button>View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="carousel-img d-block w-100"
            src="https://media.istockphoto.com/photos/young-woman-riding-bicycle-on-wooden-pier-in-the-maldives-picture-id1298306226?b=1&k=20&m=1298306226&s=170667a&w=0&h=pMdUiuUrYDwpLBq69acmj8YCLqTLtrcP3QO-kOyth0g="
            alt="Third slide"
          />

          <Carousel.Caption className="caption">
            <h3 className="title"><b>Want to visit{" "}</b>
            <Typical
                steps={[
                  "Indonesia ?",
                  3000,
                  "Thailand ?",
                  3000
                ]}
                loop={Infinity}
                wrapper="b"
              />
              </h3>
            <p>We can manage best of best resort in anywhere for you.</p>
            <button>View More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
