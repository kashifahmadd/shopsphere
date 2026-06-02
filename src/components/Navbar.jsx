function Navbar({ cartCount }) {
  return (
    <header style={styles.navbar}>
      
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <div style={styles.logo}>ShopSphere</div>

        <div style={styles.menu}>
  <a href="#">Home</a>
  <a href="#">Products</a>
  <a href="#">Contact</a>
</div>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.cart}>
        🛒 Cart: {cartCount}
      </div>

    </header>
  );
}

const styles = {
  navbar: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px",
},

  left: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "18px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },

  cart: {
    fontWeight: "bold",
  },
  menu: {
  display: "flex",
  gap: "20px",
  alignItems: "center",
},
};

export default Navbar;
