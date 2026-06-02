function Navbar({ cartCount }) {
  return (
    <header style={styles.navbar}>
      
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <div style={styles.logo}>ShopSphere</div>

        <nav style={styles.links}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Shop</a>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Contact</a>
        </nav>
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
};

export default Navbar;
