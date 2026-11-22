
import { useMemo, useState } from "react";
import "./NonVeg.css";

const items = [
  { id: 1, name: "Hyderabadi Chicken Dum Biryani", category: "Hyderabadi", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJc0iICTBA_EqL-XTGgcKmKrpAW_bKgN7JXhZFw8j9A&s=10", desc: "Aromatic basmati rice cooked with spiced chicken." },
  { id: 2, name: "Chicken 65", category: "Hyderabadi", price: 220, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmJw-qyK6oVtwCdliY0Hh1_YtgX5YtVw3K4wvae_WBg&s=10", desc: "Crispy spicy chicken tossed with curry leaves." },
  { id: 3, name: "Mutton Dum Biryani", category: "Hyderabadi", price: 350, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VQk7U_XSGAeBgcfBvHrwFQmjL6VwemF-FoOfr9qsNg&s=10", desc: "Slow-cooked mutton layered with fragrant rice." },
  { id: 4, name: "Chicken Tikka", category: "Hyderabadi", price: 260, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700", desc: "Chargrilled chicken marinated in Indian spices." },
  { id: 5, name: "Mutton Haleem", category: "Hyderabadi", price: 280, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g5YOE3D0rda7sucLBlxAm8XhY9-g2_7JcOCMt-6P7g&s=10", desc: "Rich slow-cooked wheat, lentils and mutton." },
  { id: 6, name: "Chicken Majestic", category: "Hyderabadi", price: 230, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=700", desc: "Tender chicken tossed in a creamy spicy sauce." },
  { id: 7, name: "Apollo Fish", category: "Hyderabadi", price: 280, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700", desc: "Crispy fish tossed with green chillies and spices." },
  { id: 8, name: "Pepper Chicken", category: "Hyderabadi", price: 240, img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700", desc: "Chicken cooked with freshly crushed black pepper." },
  { id: 9, name: "Chicken Kebab", category: "Hyderabadi", price: 220, img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=700", desc: "Juicy grilled chicken kebabs with herbs." },
  { id: 10, name: "Mutton Fry", category: "Hyderabadi", price: 350, img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700", desc: "Spicy traditional mutton fry." },
  { id: 11, name: "Chicken Mandi", category: "Arabian", price: 320, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb2EZRh-yKP1__xNw5_KXLQiud5PjEDDb-55QUY_99g&s=10", desc: "Arabian rice served with roasted chicken." },
  { id: 12, name: "Mutton Mandi", category: "Arabian", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLknkF37QzC_EIND1qNCSFK0I-wnSQXGxOvpvCDfMOA&s=10", desc: "Fragrant mandi rice with tender roasted mutton." },
  { id: 13, name: "Chicken Shawarma", category: "Arabian", price: 150, img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=700", desc: "Chicken wrapped in pita with garlic sauce." },
  { id: 14, name: "Chicken Al Faham", category: "Arabian", price: 350, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsVgwgYINvASEHh2aCjK4iBo0wi3AA35QLuihrUZoKA&s=10", desc: "Grilled Arabian-style chicken with spices." },
  { id: 15, name: "Grilled Chicken", category: "Arabian", price: 400, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700", desc: "Juicy grilled chicken served with sauce." },
  { id: 16, name: "Chicken Kabsa", category: "Arabian", price: 330, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFb9RS8K9ZS61OM_FlJXm8m17KVtyl7fk3o8Z6joRlw&s=10", desc: "Traditional Arabian spiced rice with chicken." },
  { id: 17, name: "Mutton Kabsa", category: "Arabian", price: 480, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRli6tjezGqSz0keMfQkFcWT5tFBngtrkJbYVJ4vyHkug&s=10", desc: "Arabian rice prepared with tender mutton." },
  { id: 18, name: "Chicken Lollipop", category: "Arabian", price: 220, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOKtyU0do_n3obmvmc4U4w7flyQHhR_uWf0l_LIciBA&s=10", desc: "Crispy chicken lollipops with spicy coating." },
  { id: 19, name: "Fish Tikka", category: "Arabian", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNZjLWOnoZhkw_rrSsUElfLZiHb6sRNm4hVrJUoQlrQ&s=10", desc: "Fish pieces grilled with aromatic marinade." },
  { id: 20, name: "Mixed Grill Platter", category: "Arabian", price: 550, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxfa1JlSoxBnIwfDKEjDsBAB_uHxBAjrq9aR2iIreXw&s=10", desc: "A generous platter of assorted grilled meats." }
];

export default function NonVeg() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState({});

  const filtered = useMemo(() => items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category)
  ), [search, category]);

  const changeQty = (id, amount) => {
    setCart((old) => {
      const next = { ...old };
      const qty = (next[id] || 0) + amount;
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = items.reduce((sum, item) => sum + item.price * (cart[item.id] || 0), 0);

  const showCart = () => {
    if (!count) return alert("Your cart is empty.");
    const order = items.filter(i => cart[i.id]).map(i =>
      `${i.name} x ${cart[i.id]} = ₹${i.price * cart[i.id]}`
    ).join("\n");
    alert(`YOUR NON-VEG ORDER\n\n${order}\n\nTotal: ₹${total}`);
  };

  return (
    <main className="nv-page">
      <section className="nv-hero">
        <div>
          <span>KPRIT CANTEEN</span>
          <h1>Delicious Non-Veg Specials</h1>
          <p>Enjoy authentic Hyderabadi favourites and Arabian specialities.</p>
          <a href="#nv-menu">Explore Menu</a>
        </div>
      </section>

      <section className="nv-menu" id="nv-menu">
        <header className="nv-heading">
          <span>OUR FOOD COLLECTION</span>
          <h2>Non-Vegetarian Menu</h2>
          <p>Freshly prepared favourites for every craving.</p>
        </header>

        <div className="nv-controls">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search dishes..." />
          <div className="nv-filters">
            {["All", "Hyderabadi", "Arabian"].map(c =>
              <button key={c} className={category === c ? "selected" : ""}
                onClick={() => setCategory(c)}>{c}</button>
            )}
          </div>
        </div>

        <div className="nv-grid">
          {filtered.map(item => (
            <article className="nv-card" key={item.id}>
              <div className="nv-photo">
                <img src={item.img} alt={item.name} loading="lazy"
                  onError={e => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }} />
                <div className="nv-fallback">🍽️<small>KPRIT CANTEEN</small></div>
                <span className="nv-tag">{item.category}</span>
              </div>
              <div className="nv-card-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="nv-card-bottom">
                  <strong>₹{item.price}</strong>
                  {cart[item.id] ? (
                    <div className="nv-qty">
                      <button onClick={() => changeQty(item.id, -1)}>−</button>
                      <b>{cart[item.id]}</b>
                      <button onClick={() => changeQty(item.id, 1)}>+</button>
                    </div>
                  ) : (
                    <button className="nv-add" onClick={() => changeQty(item.id, 1)}>
                      + Add
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {!filtered.length && <p className="nv-empty">No dishes found. Try another search.</p>}
      </section>

      {count > 0 && (
        <aside className="nv-cart">
          <div><b>{count} items in cart</b><span>Total: ₹{total}</span></div>
          <button onClick={showCart}>View Cart →</button>
        </aside>
      )}
    </main>
  );
}
