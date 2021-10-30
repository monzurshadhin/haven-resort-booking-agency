import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import useOffers from '../../../Hooks/useOffers';
import './Blogs.css';

const Blogs = () => {
    const { blogs,isLoading} = useOffers();
    // console.log(blogs);
    useEffect(() =>{
      AOS.init();
      },[]);

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
      <div className="container my-4" id="blogs">
        <h2 className="text-center mt-3 mb-4 section-title ">Stay Updated with Our Blogs</h2>
  
        <Row xs={1} md={2} lg={3} className="g-4">
          {blogs.map((blog) => (
            <Col key={blog._id} data-aos="fade-up" data-aos-delay="300">
              <Card className="offer-card">
                <div className="img-section">
                  <Card.Img variant="top" src={blog.img} />
                </div>
                <Card.Body className="blog-body">
                    <div className="d-flex justify-content-between">
                        <p><i className="far fa-user "></i> {blog.writer}</p>
                        <p><i class="far fa-comment"></i> {blog.comments} comments</p>
                    </div>
                  <Card.Title className="blog-name">
                    <b>{blog.title}</b>
                  </Card.Title>
                  
                </Card.Body>
                <div>
                <button className="m-3 card-btn">Read More</button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default Blogs;