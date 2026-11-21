
import { Link } from "react-router-dom";
import "./Home.css";

const specials = [
  {
    name: "Chicken Dum Biryani",
    price: "₹250",
    img: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800",
    desc: "Aromatic Hyderabadi biryani with delicious spices."
  },
  {
    name: "Chicken Mandi",
    price: "₹320",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    desc: "Arabian-style rice served with roasted chicken."
  },
  {
    name: "Veg Dum Biryani",
    price: "₹220",
    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    desc: "Delicious basmati rice cooked with fresh vegetables."
  }
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <span>WELCOME TO KPRIT CANTEEN</span>
          <h1>Delicious Food, Happy Moments</h1>
          <p>
            Enjoy the taste of authentic Hyderabadi and Arabian
            cuisine at KPRIT Canteen.
          </p>
          <div className="home-hero-buttons">
            <Link to="/veg">Explore Veg</Link>
            <Link to="/nonveg">Explore Non-Veg</Link>
          </div>
        </div>
      </section>

      <section className="home-features">
        <article><span>🥘</span><div><h3>Freshly Prepared</h3><p>Made with care and flavour.</p></div></article>
        <article><span>🍛</span><div><h3>Wide Variety</h3><p>Veg and non-veg favourites.</p></div></article>
        <article><span>🌿</span><div><h3>Great Taste</h3><p>Enjoy every delicious bite.</p></div></article>
      </section>

      <section className="home-specials">
        <header className="home-section-heading">
          <span>OUR POPULAR DISHES</span>
          <h2>Today's Food Highlights</h2>
          <p>Explore some of the favourites at KPRIT Canteen.</p>
        </header>

        <div className="home-special-grid">
          {specials.map((item) => (
            <article className="home-food-card" key={item.name}>
              <img src={item.img} alt={item.name} loading="lazy" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-categories">
        <header className="home-section-heading">
          <span>EXPLORE OUR MENU</span>
          <h2>Choose Your Favourite</h2>
          <p>Find something delicious for every appetite.</p>
        </header>

        <div className="home-category-grid">
          <article className="home-category-card">
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900" alt="Vegetarian food" />
            <div><h3>Vegetarian Menu</h3><p>Fresh and tasty vegetarian dishes.</p><Link to="/veg">View Veg Menu →</Link></div>
          </article>
          <article className="home-category-card">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=900" alt="Non vegetarian food" />
            <div><h3>Non-Vegetarian Menu</h3><p>Enjoy our delicious meat specialities.</p><Link to="/nonveg">View Non-Veg Menu →</Link></div>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <h2>Good Food Makes College Life Better!</h2>
        <p>Visit KPRIT Canteen and enjoy your favourite food.</p>
        <Link to="/about">Know More About Us →</Link>
      </section>
    </main>
  );
}
