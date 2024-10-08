import React from 'react';
import './home.css'
import landingImage from '../ASSETS/wp2386912-medical-doctor-wallpaper-hd.jpg';
import consultantImage1 from '../ASSETS/wp2655111-medical-doctor-wallpaper.jpg';
import consultantImage2 from '../ASSETS/wp2968626-medical-doctor-wallpaper-hd.jpg';
import consultantImage3 from '../ASSETS/wp2655110-medical-doctor-wallpaper.jpg';
import consultantImage4 from '../ASSETS/wp11422571-doctor-girl-wallpapers.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav className="nav1">
        <div className="one">
          <h1 id="h1">MediSphere</h1>
        </div>
        <div className="two">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="skyblue"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-phone-call"
          >
            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <div className="det">
            <h1>Contact Us</h1>
            <p>+91 8524889202</p>
          </div>
        </div>
        <div className="two">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="skyblue"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div className="det">
            <h1>Ramapuram</h1>
            <p>Bharathi salai, Chennai-600089</p>
          </div>
        </div>
      </nav>
      <nav className="nav2">
        <ul>
          <li><Link to={'/doctor/login'} >DOCTOR</Link></li>
          <li><Link to={'/#'} >PATIENT</Link></li>
          <li><Link to={'/reception/login'} >RECEPTIONIST</Link></li>
          <li><Link to={'/pharm/login'} >PHARMACIST</Link></li>
        </ul>
      </nav>
      <section>
        <img src={landingImage} alt="" className="landingimg" />
        <div className="details">
          <h1>Hospitals Providing total HealthCare <span>Solutions</span></h1>
          <p>Denouncing pleasure and praising pain was born and we will give you a complete account of the system</p>
        </div>
      </section>
      <section className="teams">
        <h1>Team Of Consultants</h1>
        <div className="cards">
          <div className="card">
            <div className="upper">
              <h1>Marc Parcival</h1>
              <h3>Newyork</h3>
              <h2>Contact</h2>
              <p>+321 567 89 0123</p>
              <p>Bailey@Hospitals.com</p>
            </div>
            <img src={consultantImage1} alt="" />
            <div className="lower">
              <h1>Mark Parcival</h1>
              <p>New York</p>
            </div>
          </div>
          <div className="card">
            <div className="upper">
              <h1>Marc Parcival</h1>
              <h3>Newyork</h3>
              <h2>Contact</h2>
              <p>+321 567 89 0123</p>
              <p>Bailey@Hospitals.com</p>
            </div>
            <img src={consultantImage2} alt="" />
            <div className="lower">
              <h1>Mark Parcival</h1>
              <p>New York</p>
            </div>
          </div>
          <div className="card">
            <div className="upper">
              <h1>Marc Parcival</h1>
              <h3>Newyork</h3>
              <h2>Contact</h2>
              <p>+321 567 89 0123</p>
              <p>Bailey@Hospitals.com</p>
            </div>
            <img src={consultantImage3} alt="" />
            <div className="lower">
              <h1>Mark Parcival</h1>
              <p>New York</p>
            </div>
          </div>
          <div className="card">
            <div className="upper">
              <h1>Marc Parcival</h1>
              <h3>Newyork</h3>
              <h2>Contact</h2>
              <p>+321 567 89 0123</p>
              <p>Bailey@Hospitals.com</p>
            </div>
            <img src={consultantImage4} alt="" />
            <div className="lower">
              <h1>Mark Parcival</h1>
              <p>New York</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer1">
        <div className="about">
          <h1>About Us</h1>
          <p>The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural.</p>
          <br />
          <p>A Health Care Provider of Western Approach, Hospitals is the most trusted multispecialty hospital.</p>
        </div>
        <div className="links">
          <h1>Reference Links</h1>
          <div className="lists">
            <ul>
              <li>About Us</li>
              <li>Consultants</li>
              <li>Working Hours</li>
              <li>FAQ's</li>
              <li>Services</li>
              <li>Appointments</li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h1>Contact Details</h1>
          <li>SRM University, Ramapuram, Chennai-600089</li>
          <li>+91 8524889202</li>
        </div>
      </footer>
      <footer className="footer2">
        <p>Copyrights © 2024 All Rights Reserved, Powered by <span>MediSphere</span>.</p>
      </footer>
    </div>
  );
};

export default Home;
