const CartDetails = ({ cartItems, onCheckout }) => {
    const containerStyle = {
      position: "fixed",
      top: 70,
      right: 20,
      width: "300px",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      zIndex: 999,
    };
  
    const total = cartItems.reduce((sum, item) => (sum + item.price) * item.quantity, 0);
    
  
    return (
      <div style={containerStyle}>
        <h3>🛒 Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {item.name} - ${item.price} - Count: {item.quantity}
              </li>
            ))}
          </ul>
        )}
        <hr />
        <p><strong>Total:</strong> ${total}</p>
        <button
          onClick={onCheckout}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "8px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>
    );
  };
  
  export default CartDetails;
  