import React from 'react'
import  './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div id="footer" className='footer' >
      <div className="footer-contents">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus deleniti reprehenderit mollitia natus sit minima asperiores sed cum, recusandae aspernatur! </p>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt="facebook_icon" />
                <img src={assets.twitter_icon} alt="twitter-icon" />
                <img src={assets.linkedin_icon} alt="linkedin-icon" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>91-979000000</li>
                <li>contact@tasty.in</li>
            </ul>

        </div>
      </div>
      <hr />
      <p className="footer-copyright-text">
        @Copyright 2024 | Tasty food | tasty_food.com All rights reserved.
      </p>
    </div>
  )
}

export default Footer
