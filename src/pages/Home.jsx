

import React from 'react';
import '../assets/css/HomeStyles.css';
// import TemporaryDrawer from '../assets/Components/Sidebar';
import Navbar from '../assets/Components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
{/* <Navbar/> */}
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to our Agriculture Loan Platform</h2>
          <p>Empowering farmers with easy and accessible financial solutions for sustainable agriculture.</p>
          <a href="/register" className="cta-button">Apply Now</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Loan Application Assistance</h3>
            <p>Our team provides guidance and support throughout the loan application process.</p>
          </div>
          <div className="service">
            <h3>Financial Planning</h3>
            <p>We offer financial planning services to help farmers make informed decisions.</p>
          </div>
          <div className="service">
            <h3>Rural Development Programs</h3>
            <p>Engage in our programs aimed at promoting sustainable rural development.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <div className="testimonials-content">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <p>"The agriculture loan process was quick and hassle-free. I highly recommend their services."</p>
            <p className="author">- John Doe, Farmer</p>
          </div>
          <div className="testimonial">
            <p>"Competitive interest rates and personalized assistance. A great resource for farmers."</p>
            <p className="author">- Jane Smith, Agriculturalist</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>We are dedicated to providing financial solutions to farmers, promoting sustainable agriculture, and fostering rural development. With years of experience, we understand the unique challenges of the agricultural sector and strive to empower farmers with the resources they need.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>Have questions or need assistance? Reach out to our team.</p>
          <a href="mailto:info@agricultureloans.com">info@agricultureloans.com</a>
        </div>
      </section>
    </div>
    </>
  );
}

export default Home;
