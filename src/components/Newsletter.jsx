

function Newsletter() {
  return (
    <>
        <section className="newsletter section">
      <div className="newsletter-container container">
        <div className="newsletter-content grid">
          <img
            src="assets/newsletter.jpeg"
            alt="newsletter img"
            className="newsletter-img"
          />
          <div className="newsletter-data">
            <p className="subtitles">Newsletter</p>
            <h2 className="section-title">
              Subscribe For <br />
              Offer Updates
            </h2>
            <form action="POST" className="newsletter-form" autoComplete="off">
              <input
                type="text"
                className="newsletter-input"
                placeholder="Enter E-mail"
                required=""
              />
              <button className="button ">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Newsletter