import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <section className="hero-section">
          <h1>Welcome to QuickEats</h1>
          <p>Your favorite food, delivered fast and fresh!</p>

          <button className="cta-button">
            <a href="/menu">Order Now</a>
          </button>
        </section>

        <BestFeatures />
        <Testimonials />
      </div>
    </>
  );
};

const BestFeatures = () => {
  return (
    <div>
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <img src="src\assets\fresh.png" alt="Fresh Food" />
            <h3>Fresh Ingredients</h3>
            <p>
              We ensure the freshest and highest quality ingredients for every
              meal.
            </p>
          </div>
          <div className="feature">
            <img src="src\assets\deliv.png" alt="Fast Delivery" />
            <h3>Lightning Fast Delivery</h3>
            <p>Your food will arrive hot and on time, every time.</p>
          </div>
          <div className="feature">
            <img src="src\assets\variety.png" alt="Variety" />
            <h3>Wide Variety</h3>
            <p>
              From local favorites to international cuisines, we have it all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div>
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              {
                "QuickEats always delivers on time. The food is fresh and delicious!"
              }
            </p>
            <h4>{"- Samarth Turmari"}</h4>
          </div>

          <div className="testimonial">
            <p>
              {
                "I love the variety they offer. QuickEats is my go-to food delivery app."
              }
            </p>
            <h4>{"- Sameer Manur"}</h4>
          </div>

          <div className="testimonial">
            <p>
              {"Excellent service and amazing food quality. Highly recommend for everyone!"}
            </p>
            <h4>{"- Sai Satwik"}</h4>
          </div>

          <div className="testimonial">
            <p>
              {
                "QuickEats has made ordering food so convenient. I'm a regular customer now."
              }
            </p>
            <h4>{"- Narendra K"}</h4>
          </div>

          <div className="testimonial">
            <p>
              {
                "The food is always fresh and hot. I'm very impressed with QuickEats."
              }
            </p>
            <h4>{"- Varun H"}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
