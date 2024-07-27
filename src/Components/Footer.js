import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="row">
            <div className="col-12 text-center">
              <div className="social-links mt-3">
                <a
                  href="https://www.linkedin.com/in/roshan-bachhav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61562021506751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://x.com/RoshanBachhav18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/mr.roshan_bachhav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <p className="mt-4">
              City Compass Copyright © 2024 - All rights reserved || Designed
              By: Roshan Bachhav
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
