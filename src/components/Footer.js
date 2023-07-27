import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-3 shadow-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p className="fs-5 fw-bold">Bombay Collection</p>
            <p>Address: 123 Main St, City, Country</p>
            <p>Email: info@abc@bombaycollection.com</p>
          </div>
          <div className="col-lg-4">
            <h5 className="fs-5 fw-bold">Quick Links</h5>
            <ul className="list-unstyled fs-6">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/about">About us</NavLink></li>
              <li><NavLink to="/contact">Contact us</NavLink></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="fs-5 fw-bold">Connect With Us</h5>
            <ul className="list-unstyled fs-6">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="fs-6">© {new Date().getFullYear()} Bombay Collection. All rights reserved.</p>
      </div>
    </footer>
  );
}
