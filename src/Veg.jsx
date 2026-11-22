
import { useMemo, useState } from "react";
import "./Veg.css";

const vegItems = [
  {
    id: 1,
    name: "Hyderabadi Veg Dum Biryani",
    category: "Hyderabadi",
    price: 220,
    desc: "Fragrant basmati rice with spiced vegetables, mint and saffron.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKs98mWzpqdzTefx6qdTN2X-Us2MFdhWA91Yi2guZaXw&s=10"
  },
  {
    id: 2,
    name: "Paneer 65",
    category: "Hyderabadi",
    price: 210,
    desc: "Crispy paneer cubes tossed with curry leaves and spicy masala.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdegjm0RUZ_ewc32Ym1L2RNs3Wp2b4n00rugcPha9zw&s=10"
  },
  {
    id: 3,
    name: "Baghara Baingan",
    category: "Hyderabadi",
    price: 180,
    desc: "Baby eggplants cooked in a rich peanut and sesame gravy.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLOXzHY4ebA2fVBXQWxKinm4Znfr4u0p7dtI6MSlIkw&s=10"
  },
  {
    id: 4,
    name: "Mirchi Ka Salan",
    category: "Hyderabadi",
    price: 170,
    desc: "Traditional green chili curry in a nutty coconut-sesame sauce.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpeVQb5zGwsGQav2Hm3NL9r9cEvgGSMNS3afn423ilg&s=10"
  },
  {
    id: 5,
    name: "Hyderabadi Paneer Dum Biryani",
    category: "Hyderabadi",
    price: 250,
    desc: "Soft marinated paneer cooked with aromatic basmati rice.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpu6J0XSakACDQYxCrjY20NQFfzaMYtS_-4nKplcg5g&s=10"
  },
  {
    id: 6,
    name: "Khatti Dal",
    category: "Hyderabadi",
    price: 140,
    desc: "Tangy yellow lentils tempered with garlic, cumin and spices.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXTksaex_QYo8WuRXwYzSATe2GQujTHUQlGX-CRP7KQ&s=10"
  },
  {
    id: 7,
    name: "Nizami Handi",
    category: "Hyderabadi",
    price: 230,
    desc: "Mixed vegetables in a creamy cashew and aromatic spice gravy.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThK9VKBYKpubYXF89seYiHR4rXIgcSXievekx7qXHkaw&s=10"
  },
  {
    id: 8,
    name: "Subz Miloni Tarkari",
    category: "Hyderabadi",
    price: 210,
    desc: "Fresh vegetables simmered in spinach and fenugreek gravy.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EEshp0A9mrsBovM1NgzpoMnKBVfejokaAoqHU3im3Q&s=10"
  },
  {
    id: 9,
    name: "Hyderabadi Veg Haleem",
    category: "Hyderabadi",
    price: 190,
    desc: "Slow-cooked wheat and lentils with dry fruits and ghee.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcGuW9OXiY_cpRkBdKgZ9V5zvL1uIuc2FP4Kqrf-VAg&s=10"
  },
  {
    id: 10,
    name: "Double Ka Meetha",
    category: "Hyderabadi",
    price: 130,
    desc: "Traditional bread pudding with saffron, cardamom and nuts.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyZ5oNqf2WsdEZlUG8kfDmcvFk48bK5KNp3s6PYkaxA&s=10"
  },
  {
    id: 11,
    name: "Crispy Falafel Platter",
    category: "Arabian",
    price: 190,
    desc: "Golden chickpea patties served with tahini sauce and pickles.",
    img: "https://images.unsplash.com/photo-1736928634472-abd43ed645a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: 12,
    name: "Hummus with Warm Pita",
    category: "Arabian",
    price: 160,
    desc: "Creamy chickpea and tahini dip served with warm pita bread.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzG-eGzY3rUdmRlmzzbnMuAgEM-3yVHZvjOPnoq5XS3Q&s=10"
  },
  {
    id: 13,
    name: "Paneer Shawarma Roll",
    category: "Arabian",
    price: 150,
    desc: "Grilled paneer wrapped in soft bread with garlic sauce.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPR4A6wyQtZThDy6FjfDryoEJGHKFdogXaNSndfLhztg&s=10"
  },
  {
    id: 14,
    name: "Arabian Veg Mandi",
    category: "Arabian",
    price: 260,
    desc: "Arabian-style spiced rice with roasted vegetables and cashews.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisPH8ZSoQbXyTzRvgAsKFAZzyQt7CknAsc2lk_OMrwA&s=10"
  },
  {
    id: 15,
    name: "Baba Ganoush Dip",
    category: "Arabian",
    price: 170,
    desc: "Smoky roasted eggplant dip with tahini, lemon and garlic.",
    img: "https://images.unsplash.com/photo-1589786742552-75f33147a7ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: 16,
    name: "Fattoush Salad",
    category: "Arabian",
    price: 150,
    desc: "Fresh Lebanese salad with toasted pita chips and sumac dressing.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700"
  },
  {
    id: 17,
    name: "Tabbouleh Parsley Salad",
    category: "Arabian",
    price: 155,
    desc: "Fresh parsley, mint, tomatoes and bulgur with lemon dressing.",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=700"
  },
  {
    id: 18,
    name: "Stuffed Grape Leaves (Dolma)",
    category: "Arabian",
    price: 210,
    desc: "Tender vine leaves filled with herbed rice and lemon.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMIsPqVFXnZyC_Oyay_yp30ar8jPiMYUbyfe_QEuQ-g&s=10"
  },
  {
    id: 19,
    name: "Arabian Mezze Platter",
    category: "Arabian",
    price: 320,
    desc: "A selection of hummus, falafel, olives, dips and pita bread.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZtp-REtvw1c8D5EplIyho6_8Amv8yThkVWk-rLPn3A&s=10"
  },
  {
    id: 20,
    name: "Cheese Kunafa Dessert",
    category: "Arabian",
    price: 200,
    desc: "Golden crispy pastry layered with sweet cheese and syrup.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xa6NYec1k1C1EqPp_E9x9Zu_Pdi14MbIzNq35j3lcg&s=10"
  }
];

function Veg() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState({});

  const filteredItems = useMemo(() => {
    return vegItems.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (updated[id] > 1) {
        updated[id]--;
      } else {
        delete updated[id];
      }

      return updated;
    });
  };

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const cartTotal = vegItems.reduce(
    (total, item) =>
      total + item.price * (cart[item.id] || 0),
    0
  );

  const viewCart = () => {
    if (!cartCount) {
      alert("Please add dishes to your cart.");
      return;
    }

    const details = vegItems
      .filter((item) => cart[item.id])
      .map(
        (item) =>
          `${item.name} x ${cart[item.id]} = ₹${item.price * cart[item.id]}`
      )
      .join("\n");

    alert(
      `YOUR VEG ORDER\n\n${details}\n\nTotal: ₹${cartTotal}`
    );
  };

  return (
    <div className="veg-container">

      <section className="veg-hero">
        <div className="veg-hero-content">
          <span className="veg-hero-tag">KPRIT CANTEEN</span>
          <h1>Fresh & Delicious Veg Food</h1>
          <p>
            Enjoy authentic Hyderabadi and Arabian vegetarian
            specialities, freshly prepared for you.
          </p>
          <a href="#veg-menu" className="veg-explore-btn">
            Explore Menu
          </a>
        </div>
      </section>

      <section className="veg-menu-section" id="veg-menu">

        <div className="veg-header">
          <span className="veg-section-label">
            OUR VEGETARIAN COLLECTION
          </span>
          <h2>Hyderabadi & Arabian Veg Menu</h2>
          <p>
            Discover delicious vegetarian dishes at KPRIT Canteen.
          </p>
        </div>

        <div className="veg-controls">
          <input
            className="veg-search"
            type="text"
            placeholder="Search your favourite food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="veg-filters">
            {["All", "Hyderabadi", "Arabian"].map((filter) => (
              <button
                key={filter}
                className={`veg-filter-btn ${
                  category === filter ? "active" : ""
                }`}
                onClick={() => setCategory(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="veg-grid">
          {filteredItems.map((item) => (
            <div className="veg-card" key={item.id}>

              <div className="veg-image-wrapper">
                <img
                  src={item.img}
                  alt={item.name}
                  className="veg-card-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />

                <div className="veg-image-fallback">
                  <span>🥗</span>
                  <small>KPRIT CANTEEN</small>
                </div>

                <span className={`veg-badge ${item.category.toLowerCase()}`}>
                  {item.category}
                </span>
              </div>

              <div className="veg-card-body">
                <div>
                  <h3>{item.name}</h3>
                  <p className="veg-desc">{item.desc}</p>
                </div>

                <div className="veg-card-footer">
                  <span className="veg-price">₹{item.price}</span>

                  {cart[item.id] ? (
                    <div className="veg-quantity">
                      <button onClick={() => removeFromCart(item.id)}>
                        −
                      </button>
                      <span>{cart[item.id]}</span>
                      <button onClick={() => addToCart(item.id)}>
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="veg-order-btn"
                      onClick={() => addToCart(item.id)}
                    >
                      + Add to Cart
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="veg-empty">
            <h3>No dishes found</h3>
            <p>Try searching for another dish.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Show All Dishes
            </button>
          </div>
        )}

      </section>

      {cartCount > 0 && (
        <div className="veg-cart-bar">
          <div>
            <strong>{cartCount} Items in Cart</strong>
            <span>Total Amount: ₹{cartTotal}</span>
          </div>

          <button onClick={viewCart}>
            View Cart →
          </button>
        </div>
      )}

    </div>
  );
}

export default Veg;
