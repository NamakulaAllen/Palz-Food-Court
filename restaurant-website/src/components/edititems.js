// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const GetItems = () => {
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:5000/api/v2/item_bp/get"
//         );
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching items:", error);
//         setError("Error fetching items. Please try again later.");
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <div>
//       <h2>All Items</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <h3>{item.name}</h3>
//             <p>{item.description}</p>
//             <p>Price: ${item.price}</p>
//             <p>Category: {item.category}</p>
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{ width: "100px", height: "100px" }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GetItems;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const EditItem = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:5000/api/v2/item_bp/<int:item_id>/${id}`
//         );
//         setFormData(response.data);
//       } catch (error) {
//         console.error("Error fetching item:", error);
//         setError("Error fetching item. Please try again later.");
//       }
//     };

//     fetchItem();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(
//         `http://127.0.0.1:5000/api/v2/item_bp/<int:item_id>/${id}`,
//         formData
//       );
//       navigate("/dashboard"); // Redirect to dashboard after successful edit
//     } catch (error) {
//       console.error("Error updating item:", error);
//       setError("Error updating item. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Item</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Description:
//           <input
//             type="text"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Image URL:
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Edit</button>
//       </form>
//     </div>
//   );
// };

// export default EditItem;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const EditItem = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/edit/${id}`
        );
        // Ensure the data fetched is correctly structured
        setFormData({
          name: response.data.name || "",
          description: response.data.description || "",
          price: response.data.price || "",
          category: response.data.category || "",
          image: response.data.image || "",
        });
      } catch (error) {
        console.error("Error fetching item:", error);
        setError("Error fetching item. Please try again later.");
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/edit/${id}`,
        formData
      );
      navigate("/dashboard"); // Redirect to dashboard after successful edit
    } catch (error) {
      console.error("Error updating item:", error);
      setError("Error updating item. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditItem;
