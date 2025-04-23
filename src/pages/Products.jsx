import { useState } from "react";
import CartIcon from "../components/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import {addItemToCart, clearCart} from "../components/CartSlice"
import CartDetails from "../components/CartDetails"

const mockProducts = [
  { id: 1, name: "Planet 1", price: 100},
  { id: 2, name: "Planet 2", price: 200 },
  { id: 3, name: "Planet 3", price: 150 },
];

const Products = () => {
  const cartItem = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()
  const quantity = cartItem.map(item => item.quantity)
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    dispatch(addItemToCart(product))
  };

  const handleCheckout = () => {
    if (quantity.length == 0){
        alert(`You cannot make checkout without add items into cart`)
        setIsCartOpen(false);
    }
    else{
        alert(`Proceeding to checkout with ${quantity.reduce((acc, cur) => acc + cur)} items.`);
        dispatch(clearCart())
        setIsCartOpen(false);
    }
  };

  const containerStyle = {
    padding: "2rem",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
  };

  const productListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    marginTop: "2rem",
  };

  const productCardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    textAlign: "center",
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Products</h2>
      <div style={productListStyle}>
        {mockProducts.map((product) => (
          <div key={product.id} style={productCardStyle}>
            <h3>{product.name}</h3>
            <p style={{ fontSize: "1.1rem", margin: "10px 0" }}>
              ${product.price}
            </p>
            <button style={buttonStyle} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <CartIcon onCheckOut ={handleCheckout} onToggleCart={() => setIsCartOpen(!isCartOpen)}/>
      {isCartOpen && <CartDetails cartItems={cartItem} onCheckout={handleCheckout} />}
    </div>
  );
};

export default Products;
