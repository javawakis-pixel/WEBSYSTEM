import React from "react";
import "./login.css"; // Assuming your CSS is in this file
import worldrotating from "../assets/world rotating.mp4";
import user from "../assets/user.png";
import email from "../assets/email.png";
import lock from "../assets/lock.png";

import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Login = () => {
  return (
    <div className="login-container">
      {/* Background Video */}
      <div className="background">
        <video className="background-video" autoPlay loop muted>
          <source src={worldrotating} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="login-content">
        

        {/* Login Form */}
        <div className="inputs">
          <div className="Header">
            <div className="text">Sign in</div>
            <div className="underline"></div>
          </div>

          <div className="user">
            <img src={user} alt="User Icon" className="input-icon" />
            <input type="text" name="Username" placeholder="Username" />
          </div>

          <div className="email">
            <img src={email} alt="Email Icon" className="input-icon" />
            <input type="email" name="Email" placeholder="Email" />
          </div>

          <div className="password">
            <img src={lock} alt="Password Icon" className="input-icon" />
            <input type="password" name="Password" placeholder="Password" />
          </div>

          <h3>Create Account</h3>

          <form action="submit">
  <button
    className="Create-Email"
    onClick={() => window.open('https://www.gpsautolocate.com/ph/login?gclid=CjwKCAjwktO_BhBrEiwAV70jXutEHVBQKq6r1u2UpDp1-3qvo4lWjhN-lJUap0oEWPeAg3a2AXB-XBoChoMQAvD_BwE&channel=FMP1_7_1-PH-ALL', '_blank')}
  >
    <img
      src={google}
      alt="Google Icon"
      style={{
        width: '30px',
        height: '40px',
        objectFit: 'contain',
      }}
    />
    <span
      style={{
        marginRight: '50px',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      Sign up
    </span>
  </button>

  <button
    className="Create-Facebook"
    onClick={() => window.open('https://www.gpsautolocate.com/ph/login?gclid=CjwKCAjwktO_BhBrEiwAV70jXutEHVBQKq6r1u2UpDp1-3qvo4lWjhN-lJUap0oEWPeAg3a2AXB-XBoChoMQAvD_BwE&channel=FMP1_7_1-PH-ALL', '_blank')}
  >
    <img
      src={facebook}
      alt="Facebook Icon"
      style={{
        width: '30px',
        height: '40px',
        objectFit: 'contain',
      }}
    />
    <span
      style={{
        marginRight: '40px',
        paddingRight: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
    >
      Sign up 
    </span>
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Login;
