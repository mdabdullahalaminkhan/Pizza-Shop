

function Popular() {
  return (
    <>
        
    <section className="popular " id="popular">
      <p className="subtitles">The Best Pizza</p>
      <h2 className="section-title">Popular Cattegory</h2>
      <div className="popular-container container grid">
        <article className="popular-card ">
          <div className="popular-bg" />
          <img
            src="assets/popular1.jpeg"
            alt=""
            className="popular-img"
          />
          <h3 className="popular-title">Mediterranean Marvel</h3>
          <span className="popular-subtitle">Unforgetable</span>
          <h3 className="popular-price">$10.00</h3>
          <button className="popular-button button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
        <article className="popular-card swiper-slide">
          <div className="popular-bg" />
          <img
            src="assets/popular2.jpeg"
            alt=""
            className="popular-img"
          />
          <h3 className="popular-title">BBQ Bliss</h3>
          <span className="popular-subtitle">Perfect</span>
          <h3 className="popular-price">$15.00</h3>
          <button className="popular-button button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
        <article className="popular-card swiper-slide">
          <div className="popular-bg" />
          <img
            src="assets/popular3.jpeg"
            alt=""
            className="popular-img"
          />
          <h3 className="popular-title">Garden Harvest</h3>
          <span className="popular-subtitle">The Best</span>
          <h3 className="popular-price">$19.00</h3>
          <button className="popular-button button">
            <i className="ri-shopping-bag-line" />
          </button>
        </article>
      </div>
    </section>
    </>
  )
}

export default Popular