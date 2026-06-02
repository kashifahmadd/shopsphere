function Navbar({ cartCount }) {
  return (
    <header style={styles.navbar}>
      
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <div style={styles.logo}>ShopSphere</div>

        <div style={styles.menu}>
  <a href="#" style={styles.link}>Home</a>
<a href="#" style={styles.link}>Products</a>
<a href="#" style={styles.link}>Contact</a>
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
    link: {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "500",
  padding: "6px 10px",
  borderRadius: "6px",
  transition: "0.2s",
}
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
