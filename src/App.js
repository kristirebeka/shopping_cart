import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Cart from "./Cart";
import './App.css';
import Badge from "@mui/material/Badge";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const images = [
  { src: img1, id: "img1", name: "Fragrance", price: 85 },
  { src: img2, id: "img2", name: "Sunglasses", price: 66 },
  { src: img3, id: "img3", name: "Black modelcar", price: 29 },
  { src: img4, id: "img4", name: "White modelcar", price: 34 },
  { src: img5, id: "img5", name: "Bag", price: 28 },
  { src: img6, id: "img6", name: "Earpods", price: 176 },
];
function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/cart">
              <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
                <Cart items={cartItems} />
              </Box>
            </Route>
            <Route path="/">
              <header>
                <h1>Welcome to the shop</h1>
                <Link to="/cart">
                  <Badge badgeContent={cartItems.length} color="primary">
                    View Cart
                  </Badge>
                </Link>
                <div className="column d-flex flex-wrap">
                  {images.map((image) => (
                      <div
                          className="card border rounded"
                          style={{ width: "18rem" }}
                      >
                        <img
                            src={image.src}
                            className="card-img-top"
                            alt="..."
                            id={image.id}
                            style={{ width: "100%", height: "auto" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{image.name}</h5>
                          <p className="card-text">{`Price: $${image.price}`}</p>
                          <button
                              onClick={() => handleAddToCart(image)}
                              className="btn btn-primary"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                  ))}
                </div>
              </header>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}
export default App;
