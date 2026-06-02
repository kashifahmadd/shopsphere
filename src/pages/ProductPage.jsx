import { useEffect, useState } from "react";

/* MOCK API (required by task) */
function fetchProduct() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "AeroBass Wireless Headphones",
        description:
          "Premium wireless headphones with deep bass, noise cancellation, and comfort fit.",
        variants: {
          Black: {
            price: 199,
            stock: "In Stock",
            images: [
              "/assets/black1.jpg",
              "/assets/black2.avif",
            ],
          },
          White: {
            price: 209,
            stock: "Limited Stock",
            images: [
              "/assets/white1.avif",
              "/assets/white2.avif",
            ],
          },
          Blue: {
            price: 219,
            stock: "Limited Stock",
            images: [
              "/assets/blue1.avif",
              "/assets/blue2.png",
            ],
          },
        },
      });
    }, 1000);
  });
}

export default function ProductPage({ setCartCount }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [color, setColor] = useState("Black");
  const [imgIndex, setImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct().then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading product...</h2>;
  }

  const variant = product.variants[color];

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* IMAGE SECTION (CAROUSEL + ZOOM) */}
        <div style={styles.imageBox}>
          <img
            src={variant.images[imgIndex]}
            alt="product"
            style={styles.image}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />

          <div style={styles.thumbs}>
            {variant.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setImgIndex(i)}
                style={{
                  ...styles.thumb,
                  border: imgIndex === i ? "2px solid black" : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div style={styles.details}>
          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <h2>${variant.price}</h2>
          <p
  style={{
    fontWeight: "bold",
    color: variant.stock === "In Stock" ? "green" : "orange",
    marginTop: "5px",
  }}
>
  {variant.stock}
</p>

          {/* VARIANTS */}
          <div style={styles.section}>
            <b>Color:</b>
            <div style={styles.row}>
              {Object.keys(product.variants).map((c) => (
  <button
    key={c}
    onClick={() => {
      setColor(c);
      setImgIndex(0);
    }}
    style={{
      padding: "8px 14px",
      borderRadius: "20px",
      border: "1px solid #ccc",
      cursor: "pointer",
      background:
        c === "Black"
          ? "#000"
          : c === "White"
          ? "#f5f5f5"
          : "#1976d2",
      color: c === "White" ? "#000" : "#fff",
      fontWeight: "bold",
    }}
  >
    {c}
  </button>
))}
            </div>
          </div>

          {/* QUANTITY */}
          <div style={styles.section}>
            <b>Quantity:</b>
            <div style={styles.row}>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
          </div>

          {/* CART */}
          <button
            style={styles.cartBtn}
            onClick={() => setCartCount((prev) => prev + quantity)}
          >
            Add to Cart
          </button>

          {/* BACK */}
          <p style={styles.back} onClick={() => window.location.reload()}>
            ← Back to Shop
          </p>

          {/* REVIEWS */}
         <div style={styles.reviews}>
  <h3>Customer Reviews</h3>

  {[
    {
      name: "Aarav Sharma",
      img: "https://i.pravatar.cc/100?img=12",
      rating: 5,
      text: "Absolutely amazing sound quality. Feels premium!",
    },
    {
      name: "Neha Verma",
      img: "https://i.pravatar.cc/100?img=32",
      rating: 4,
      text: "Very comfortable for long use. Battery is great.",
    },
    {
      name: "Rohit Singh",
      img: "https://i.pravatar.cc/100?img=45",
      rating: 5,
      text: "Bass is insane. Worth every rupee.",
    },
  ].map((r, i) => (
    <div key={i} style={styles.reviewCard}>
      <div style={styles.reviewHeader}>
        <img src={r.img} style={styles.avatar} />
        <div>
          <b>{r.name}</b>
          <div>{"⭐".repeat(r.rating)}</div>
        </div>
      </div>
      <p style={{ marginTop: "8px" }}>{r.text}</p>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    gap: "40px",
    maxWidth: "1000px",
  },
  imageBox: { flex: 1 },
  image: {
    width: "100%",
    transition: "0.3s",
    borderRadius: "10px",
  },
  thumbs: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  thumb: {
    width: "60px",
    cursor: "pointer",
  },
  details: { flex: 1 },
  section: { margin: "15px 0" },
  row: { display: "flex", gap: "10px", alignItems: "center" },
  cartBtn: {
    padding: "10px",
    background: "#111",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  back: { color: "blue", cursor: "pointer", marginTop: "10px" },
  reviews: { marginTop: "20px" },
  reviewCard: {
  background: "#f7f7f7",
  padding: "12px",
  borderRadius: "10px",
  marginTop: "10px",
},

reviewHeader: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
},

avatar: {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
},
};
