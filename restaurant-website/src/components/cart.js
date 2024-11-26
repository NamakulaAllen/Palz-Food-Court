// import React, { useContext, useState } from "react";
// import { CartContext } from "../components/context";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Cart = () => {
//   const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [deliveryInformation, setDeliveryInformation] = useState("");
//   const [error, setError] = useState("");

//   const handlePlaceOrder = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const orderData = cartItems.map((item) => ({
//         restaurant_id: 1, // Replace with actual restaurant ID if available
//         deliveryInformation: deliveryInformation || "default address", // Replace with actual delivery information if available
//         quantity: item.quantity,
//         total_amount: item.price,
//         status: "Pending",
//         item_id: item.id,
//       }));

//       await Promise.all(
//         orderData.map((order) =>
//           axios.post("http://127.0.0.1:5000/api/v2/order1/orders", order, {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//             },
//           })
//         )
//       );

//       clearCart();
//       setLoading(false);
//       alert("Order placed successfully!");
//       navigate("/order-success"); // Add a success page route if needed
//     } catch (error) {
//       setLoading(false);
//       setError("Error placing order.");
//       console.error("Error placing order:", error);
//     }
//   };

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.name} />
//               <div className="cart-item-details">
//                 <p>Name: {item.name}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: {item.price}</p>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           <div className="form-group">
//             <label>Address:</label>
//             <textarea
//               value={deliveryInformation}
//               onChange={(e) => setDeliveryInformation(e.target.value)}
//               required
//             />
//           </div>
//           <label>Total amount:</label>
//           <button onClick={handlePlaceOrder} disabled={loading}>
//             {loading ? "Placing Order..." : "Place Order"}
//           </button>
//           {error && <p className="error-message">{error}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext, useState } from "react";
// import { CartContext } from "../components/context";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Cart = () => {
//   const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [deliveryInformation, setDeliveryInformation] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handlePlaceOrder = async () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");
//       setSuccessMessage("Order placed successfully!");

//       const orderData = cartItems.map((item) => ({
//         restaurant_id: 1, // Replace with actual restaurant ID if available
//         deliveryInformation: deliveryInformation || "default address", // Replace with actual delivery information if available
//         quantity: item.quantity,
//         total_amount: item.price,
//         status: "Pending",
//         item_id: item.id,
//       }));

//       await Promise.all(
//         orderData.map((order) =>
//           axios.post("http://127.0.0.1:5000/api/v2/order1/orders", order, {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//             },
//           })
//         )
//       );

//       clearCart();
//       setLoading(false);
//       setSuccessMessage("Order placed successfully!");
//       navigate("/history"); // Add a success page route if needed
//     } catch (error) {
//       setLoading(false);
//       setError("Error placing order.");
//       console.error("Error placing order:", error);
//     }
//   };

//   const handleContinueShopping = () => {
//     navigate("/menu"); // Replace with your actual menu items route
//   };

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="cart-items">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cart-item">
//               <img src={item.image} alt={item.name} />
//               <div className="cart-item-details">
//                 <p>Name: {item.name}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Price: {item.price}</p>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           <div className="form-group">
//             <label>Address:</label>
//             <textarea
//               value={deliveryInformation}
//               onChange={(e) => setDeliveryInformation(e.target.value)}
//               required
//             />
//           </div>
//           <label>Total amount:</label>
//           <button onClick={handleContinueShopping}>Continue Shopping</button>
//           <button onClick={handlePlaceOrder} disabled={loading}>
//             {loading ? "Placing Order..." : "Place Order"}
//           </button>

//           {error && <p className="error-message">{error}</p>}
//           {successMessage && (
//             <p className="success-message">{successMessage}</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useState } from "react";
import { CartContext } from "../components/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css"; // Import the CSS file

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePlaceOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccessMessage("Order placed successfully!");

      const orderData = cartItems.map((item) => ({
        restaurant_id: 1,
        deliveryInformation: deliveryAddress || "default address",
        quantity: item.quantity,
        total_amount: item.price,
        status: "Recieved",
        item_id: item.id,
      }));

      await Promise.all(
        orderData.map((order) =>
          axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/orders`,
            order,
            {
              headers: {
                Authorization: `Bearer ${user.access_token}`,
              },
            }
          )
        )
      );

      clearCart();
      setLoading(false);
      setSuccessMessage("Order placed successfully!");
      navigate("/history");
    } catch (error) {
      setLoading(false);
      setError("Error placing order.");
      console.error("Error placing order:", error);
    }
  };

  const handleContinueShopping = () => {
    navigate("/menu");
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>My Shopping Cart</h2>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-price">{item.description}</p>
                {/* <div className="cart-item-quantity">
                  <button className="quantity-button">-</button>
                  <span>{item.quantity}</span>
                  <button className="quantity-button">+</button>
                </div> */}
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* <div className="cart-summary">
            <div className="total-price">
              <span>Total price:</span>
              <span>
                UGX{" "}
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </span>
            </div> */}
          <div className="delivery-address">
            <label htmlFor="deliveryAddress">Delivery Address:</label>
            <textarea
              id="deliveryAddress"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Enter your delivery address"
            ></textarea>
          </div>
          <div className="cart-actions">
            <button
              className="continue-shopping-button"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="checkout-button"
              onClick={handlePlaceOrder}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
        // </div>
      )}
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Cart;
