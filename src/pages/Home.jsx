const Home = () => {
    const containerStyle = {
      height: "100vh",
      background: "linear-gradient(135deg, #f2f2f2, #e0e0e0)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
    };
  
    const headingStyle = {
      fontSize: "3rem",
      marginBottom: "1rem",
      color: "#333",
    };
  
    const paragraphStyle = {
      fontSize: "1.2rem",
      color: "#666",
      maxWidth: "500px",
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>Welcome to MyShop</h1>
        <p style={paragraphStyle}>
          Discover the best deals on gadgets, electronics, and more — all in one place!
        </p>
      </div>
    );
  };
  
  export default Home;
  