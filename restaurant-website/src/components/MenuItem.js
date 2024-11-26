// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, useSearchParams } from "react-router-dom";
// import "./menuitem.css"; // Make sure to import the CSS file

// const itemsData = {
//   breakfast: [
//     // ...your items
//   ],
//   lunch: [
//     // ...your items
//   ],
//   // ...other categories
// };

// const Category = () => {
//   const [searchParams] = useSearchParams();
//   const [menuItems, setMenuItems] = useState([]);
//   const mymenu = searchParams.get("menu");
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const items = itemsData[category] || [];

//   const handleOrder = (itemId) => {
//     const user = localStorage.getItem("user");
//     // alert(user);
//     if (!user) {
//       navigate("/register");
//     } else {
//       navigate(`/order/${itemId}`);
//     }
//   };

//   useEffect(() => {
//     fetch(`http://127.0.0.1:5000/api/v2/item_bp/${mymenu}`, {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setMenuItems(Array.isArray(data) ? data : []);
//         console.log(data);
//       })
//       .catch((error) => console.log(error));
//   }, [mymenu]);

//   return (
//     <div className="category-container">
//       {menuItems.length > 0
//         ? menuItems.map((item) => (
//             <div key={item.id} className="category-item">
//               <img src={item.image} alt={item.name} />
//               <h4>{item.name}</h4>
//               <p>{item.description}</p>
//               <p className="price">{item.price}</p>
//               <button
//                 className="order-button"
//                 onClick={() => handleOrder(item.id)}
//               >
//                 Order now
//               </button>
//             </div>
//           ))
//         : "No items found"}
//     </div>
//   );
// };

// export default Category;

// src/components/Category.js

// src/components/Category.js

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import "./menuitem.css"; // Make sure to import the CSS file
import BreakfastCombos from "../components/breakfast"; // Import the BreakfastCombos component

const itemsData = {
  breakfast: [
    // ...your items
  ],
  lunch: [
    // ...your items
  ],
  // ...other categories
};

const Category = () => {
  const [searchParams] = useSearchParams();
  const [menuItems, setMenuItems] = useState([]);
  const mymenu = searchParams.get("menu");
  const { category } = useParams();
  const navigate = useNavigate();
  const items = itemsData[category] || [];

  const handleOrder = (itemId) => {
    const user = localStorage.getItem("user");
    // alert(user);
    if (!user) {
      navigate("/register");
    } else {
      navigate(`/order/${itemId}`);
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/${mymenu}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(Array.isArray(data) ? data : []);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [mymenu]);

  return (
    <div className="category-container">
      {category === "breakfast" && <BreakfastCombos />}{" "}
      {/* Render the BreakfastCombos component for the breakfast category */}
      {menuItems.length > 0
        ? menuItems.map((item) => (
            <div key={item.id} className="category-item">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button
                className="order-button"
                onClick={() => handleOrder(item.id)}
              >
                Order now
              </button>
            </div>
          ))
        : "No items found"}
    </div>
  );
};

export default Category;
