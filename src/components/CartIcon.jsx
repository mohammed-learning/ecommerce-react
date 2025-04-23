import { useSelector } from "react-redux";

const CartIcon = ({onCheckOut, onToggleCart}) => {
    const cartStyle = {
      position: "fixed",
      top: 20,
      right: 20,
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      padding: "10px 15px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer"
    };
  
    const buttonStyle = {
      backgroundColor: "#2196F3",
      color: "white",
      border: "none",
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer",
    };
    const cartItems = useSelector(state => state.cart.cartItems),
          quantity = cartItems.map((item) => item.quantity)
    
    
    return (
      <div style={cartStyle} onClick={onToggleCart}>
        🛒 <strong>{ cartItems.length == 0 ? 0: quantity.reduce((acc, cur) => acc + cur)}</strong>
        <button style={buttonStyle} onClick={onCheckOut}>
          Checkout
        </button>
      </div>
    );
  };
  
  export default CartIcon;
  