
import { Link } from "react-router-dom";
import "./AboutUs.css";

const gallery = [
  {
    title: "Our Campus",
    desc: "A welcoming campus environment at KPRIT.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=900"
  },
  {
    title: "Our Canteen",
    desc: "A comfortable place for students to enjoy meals.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900"
  },
  {
    title: "Fresh Food",
    desc: "Delicious meals prepared with care.",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900"
  }
];

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div>
          <span>WELCOME TO KPRIT CANTEEN</span>
          <h1>Good Food. Great Memories.</h1>
          <p>
            Bringing students and staff together with delicious food,
            friendly service and a welcoming atmosphere.
          </p>
          <Link to="/veg">Explore Our Menu</Link>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000"
            alt="Restaurant dining area"
            loading="lazy"
          />
        </div>
        <div className="about-story-text">
          <span>OUR STORY</span>
          <h2>About KPRIT Canteen</h2>
          <p>
            KPRIT Canteen is a place where students and staff can take
            a break, enjoy tasty meals and spend time with friends.
          </p>
          <p>
            Our menu brings together popular Hyderabadi dishes and
            Arabian favourites, with vegetarian and non-vegetarian
            choices for different tastes.
          </p>
          <p>
            We aim to make every visit comfortable, enjoyable and
            memorable.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <span>WHAT MAKES US SPECIAL</span>
          <h2>Our Canteen Values</h2>
        </div>
        <div className="about-value-grid">
          <article><span>🥗</span><h3>Fresh Food</h3><p>Food prepared with attention to freshness and taste.</p></article>
          <article><span>🍽️</span><h3>Variety</h3><p>Vegetarian, non-vegetarian and regional favourites.</p></article>
          <article><span>🤝</span><h3>Friendly Service</h3><p>A welcoming place for the KPRIT community.</p></article>
        </div>
      </section>

      <section className="about-gallery-section">
        <div className="about-section-heading">
          <span>TAKE A LOOK</span>
          <h2>Our Canteen Gallery</h2>
        </div>
        <div className="about-gallery">
          {gallery.map((item) => (
            <article className="about-gallery-card" key={item.title}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <div><h3>{item.title}</h3><p>{item.desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Hungry? Visit KPRIT Canteen!</h2>
        <p>Discover your next favourite meal today.</p>
        <div>
          <Link to="/veg">Veg Menu</Link>
          <Link to="/nonveg">Non-Veg Menu</Link>
        </div>
      </section>
    </main>
  );
}
