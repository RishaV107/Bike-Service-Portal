import React from 'react'
import '../css/HowItworks.css'
import Button from './Button'
import pic1 from '../photos/Security.svg'
import pic2 from '../photos/Service.svg'
import pic3 from '../photos/Payment.svg'
const HowItwork = () => {
    return (
        <div className="howItworks">
            <div className="con">
             <div className="box2">
                <h1 className="title"> How it works?</h1>
                <h3>The easy booking process with technology and quality driven support.</h3>
                <Button text="Book Now"/>
            </div>
            <div className="box">
      
                </div>
            </div>
            <div className="card-box">
                <div className=" card-item">
                
                  <span className="step">Step 1</span>
                        <img className="  " src={pic1}/>
					<div className="title_sections"> 
                    <h2 className="c-white">Book A Service</h2>
                    <p className="c-white">
                      Book a service that is suited to your motorcycle or scooter and our mechanic will come to you and deliver the service in your parking.
						 
                    </p>
              </div>
                </div>
                        <div className=" card-item c2">
                
                  <span className="step">Step 2</span>
                        <img className="  " src={pic2}/>
					<div className="title_sections"> 
                    <h2 className="c-white">Service Delivery In Your Parking</h2>
                    <p className="c-white">
                      Book a service that is suited to your motorcycle or scooter and our mechanic will come to you and deliver the service in your parking.
						 
                    </p>
              </div>
                </div>
                        <div className=" card-item c3">
                
                  <span className="step">Step 3</span>
                        <img className="  " src={pic3}/>
					<div className="title_sections"> 
                    <h2 className="c-white">Payment & Feedback</h2>
                    <p className="c-white">
                      Book a service that is suited to your motorcycle or scooter and our mechanic will come to you and deliver the service in your parking.
						 
                    </p>
              </div>
            </div>
           </div>
        </div>
    )
}

export default HowItwork;
