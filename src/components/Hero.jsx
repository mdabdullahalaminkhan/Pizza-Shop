function Hero() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home-container container grid">
          <img
            src="assets/home.jpeg"
            alt="Image"
            className="home-img"
          />
          <div className="home-data">
            <h1 className="home-title">
              Enjoy Delicious
              <div>
                <img src="assets/home-title.jpeg" alt="Image" />
                Pizza Food
              </div>
            </h1>
            <p className="home-desc">
            Indulge your senses in a symphony of flavors, where each bite is a harmonious dance of exquisite tastes.
            </p>
            <a href="#" className="button">
              Order Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
