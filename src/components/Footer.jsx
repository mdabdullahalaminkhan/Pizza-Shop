

function Footer() {
  return (
    <>
        <footer className="footer" id="footer">
      <div className="footer-container container grid">
        <div>
          <a href="#" className="footer-logo">
            <img src="assets/logo.png" alt="Logo" />
          </a>
          <p className="footer-desc">
            Food for the body is not <br />
            enough. There must be food <br />
            for the soul.
          </p>
        </div>
        <div className="footer-data grid">
          <div>
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">News</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Testimional
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Videos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Address</h3>
            <ul className="footer-links">
              <li className="footer-info">
              www.aminprofessional.com
              </li>
              <li className="footer-info">9AM - 11PM</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Social Media</h3>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/"
                className="footer-social-link"
              >
                <i className="ri-facebook-circle-line" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="footer-social-link"
              >
                <i className="ri-instagram-line" />
              </a>
              <a href="https://www.youtube.com/" className="footer-social-link">
                <i className="ri-youtube-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-credit container">
        <div className="footer-card">
          <img
            src="assets/footer-card-1.png"
            alt="card img"
            className="footer-img"
          />
          <img
            src="assets/footer-card-2.png"
            alt="card img"
            className="footer-img"
          />
          <img
            src="assets/footer-card-3.png"
            alt="card img"
            className="footer-img"
          />
          <img
            src="assets/footer-card-4.png"
            alt="card img"
            className="footer-img"
          />
        </div>
      </div>
      <span className="footer-copy">© All Rights Reserved By https://www.aminprofessional.com/</span>
    </footer>
    </>
  )
}

export default Footer