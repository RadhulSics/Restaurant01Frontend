import React from "react";
import food1 from "../Assests/restuarant.jpeg";
import dining from "../Assests/dining.jpg";
import delivery from "../Assests/delivery.jpg";
import event from "../Assests/event.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Restaurantgallery() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" ,background: ' rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)'}}>
      <div style={{ position: "relative" }}>
        <img src={food1} style={{ width: "100%", height: "auto" }} alt="food1" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            fontSize: "7rem",
            fontWeight: "italic",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
         Serving Happiness on Every Plate
        </div>
      </div>
      
      <div className="container my-5" style={{ background: 'rgba(0, 0, 0, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100" style={{ position: "relative" }}>
              <img src={dining} className="card-img-top" alt="Dining Available" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
              <div
                className="card-img-overlay"
                style={{
                  background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                <h5 className="card-title">Dining Available</h5>
                <p className="card-text">Enjoy a wonderful dining experience at our restaurant with a cozy atmosphere.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100" style={{ position: "relative" }}>
              <img src={delivery} className="card-img-top" alt="Home Delivery" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
              <div
                className="card-img-overlay"
                style={{
                  background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                <h5 className="card-title">Home Delivery</h5>
                <p className="card-text">Get your favorite dishes delivered to your doorstep with our efficient home delivery service.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100" style={{ position: "relative" }}>
              <img src={event} className="card-img-top" alt="Event Catering" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
              <div
                className="card-img-overlay"
                style={{
                  background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                <h5 className="card-title">Event Catering</h5>
                <p className="card-text">We offer catering services for events of all sizes, ensuring a delightful culinary experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "1rem", background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
        &copy; 2024 UDHITH AND Co. RESTAURANT. All rights reserved.
      </footer>

      <div style={{ textAlign: "center", padding: "1rem", background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)", color: "white" }}>
        <h5>Contact Us</h5>
        <p>12/3 Food Street, Kazhakootam, Trivandrum</p>
        <p>Phone: +91 9768335511</p>
        <p>Email: contact@udhithandcorestaurant.com</p>
      </div>
    </div>
  );
}

export default Restaurantgallery;
