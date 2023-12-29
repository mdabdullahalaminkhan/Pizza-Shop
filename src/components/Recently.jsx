
function Recently() {
  return (
    <>
        <section className="recently section" id="recently">
      <div className="recently-container container grid">
        <div className="recently-data">
          <p className="subtitles">Recently Added</p>
          <h2 className="section-title">
            Bolder Pizza <br />
            A Smoky Sensation
          </h2>
          <p className="recently-desc">
            Take a look at what is new. And do not deprive yourself of a good
            meal, enjoy and be happy.
          </p>
          <a href="#" className="button">
            Order Now
          </a>
        </div>
        <img
          src="assets/recently.jpeg"
          alt="Sushi img"
          className="recently-img"
        />
      </div>
    </section>
    </>
  )
}

export default Recently