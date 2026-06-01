export const fetchProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Nova X Wireless Headphones",
        description:
          "Premium noise-cancelling headphones with deep bass and long battery life.",
        variants: {
          Black: {
            price: 199,
            images: [
              "https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
            stock: "In Stock",
          },
          White: {
            price: 209,
            images: [
              "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
            stock: "Limited Stock",
          },
          Blue: {
            price: 219,
            images: [
              "https://images.pexels.com/photos/3394655/pexels-photo-3394655.jpeg?auto=compress&cs=tinysrgb&w=800",
              "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
            stock: "Limited Stock",
          },
        },
      });
    }, 1000);
  });
};