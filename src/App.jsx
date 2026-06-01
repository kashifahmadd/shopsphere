import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <ProductPage setCartCount={setCartCount} />
    </div>
  );
}

export default App;