import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Essential Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Social Media Handles</h4>
            <ul>
              <li><a href="#" target="_blank">Facebook</a></li>
              <li><a href="#" target="_blank">Twitter</a></li>
              <li><a href="#" target="_blank">Instagram</a></li>
              <li><a href="#" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;