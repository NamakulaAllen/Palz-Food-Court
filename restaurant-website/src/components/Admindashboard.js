// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./admindashboard.css";

// const AdminDashboard = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   const fetchMenuItems = async () => {
//     try {
//       const response = await axios.get(
//         "http://127.0.0.1:5000/api/v2/item_bp/get"
//       );
//       setMenuItems(response.data);
//     } catch (error) {
//       console.error("Error fetching menu items:", error);
//     }
//   };

//   const handleDelete = async (itemId) => {
//     try {
//       await axios.delete(
//         `http://127.0.0.1:5000/api/v2/item_bp/delete/${itemId}`
//       );
//       fetchMenuItems(); // Refresh menu items after deletion
//     } catch (error) {
//       console.error("Error deleting menu item:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://127.0.0.1:5000/api/v2/item_bp/", formData);
//       fetchMenuItems(); // Refresh menu items after addition
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         image: "",
//       });
//     } catch (error) {
//       console.error("Error adding item:", error);
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>

//       <section>
//         <h3>Menu Items</h3>
//         <Link to="/dashboard/items/add">Add New Item</Link>
//         <div className="menu-grid">
//           {menuItems.map((item) => (
//             <div key={item.id} className="menu-card">
//               <img src={item.image} alt={item.name} className="menu-image" />
//               <div className="menu-details">
//                 <strong>{item.name}</strong>
//                 <p>{item.description}</p>
//                 <p>{item.price}</p>
//                 <div className="menu-actions">
//                   <Link
//                     to={`/dashboard/items/edit?id=${item.id}`}
//                     className="edit-link"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="delete-button"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* <section>
//         <h3>Add New Item</h3>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Description:
//             <input
//               type="text"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Price:
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Image URL:
//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//             />
//           </label>
//           <button type="submit">Add Item</button>
//         </form>
//       </section> */}
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./admindashboard.css";

// const AdminDashboard = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [users, setUsers] = useState([]); // State to store users
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   useEffect(() => {
//     fetchMenuItems();
//     fetchUsers(); // Fetch users when component mounts
//   }, []);

//   const fetchMenuItems = async () => {
//     try {
//       const token = JSON.parse(localStorage.getItem("user")).token; // Retrieve the token from local storage
//       const response = await axios.get(
//         "http://127.0.0.1:5000/api/v2/item_bp/get",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Add token to headers
//           },
//         }
//       );
//       setMenuItems(response.data);
//     } catch (error) {
//       console.error("Error fetching menu items:", error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const access_token = JSON.parse(
//         localStorage.getItem("user")
//       ).access_token; // Retrieve the token from local storage
//       const response = await axios.get(
//         "http://127.0.0.1:5000/api/v2/users/users",
//         {
//           headers: {
//             Authorization: `Bearer ${access_token}`, // Add token to headers
//           },
//         }
//       );
//       // console.log(response.data.users);

//       setUsers(response.data.users);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleDelete = async (itemId) => {
//     try {
//       const token = JSON.parse(localStorage.getItem("user")).token; // Retrieve the token from local storage
//       await axios.delete(
//         `http://127.0.0.1:5000/api/v2/item_bp/delete/${itemId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Add token to headers
//           },
//         }
//       );
//       fetchMenuItems(); // Refresh menu items after deletion
//     } catch (error) {
//       console.error("Error deleting menu item:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = JSON.parse(localStorage.getItem("user")).token; // Retrieve the token from local storage
//       await axios.post("http://127.0.0.1:5000/api/v2/item_bp/", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Add token to headers
//         },
//       });
//       fetchMenuItems(); // Refresh menu items after addition
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         image: "",
//       });
//     } catch (error) {
//       console.error("Error adding item:", error);
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>

//       <section>
//         <h3>Menu Items</h3>
//         <Link to="/dashboard/items/add">Add New Item</Link>
//         <div className="menu-grid">
//           {menuItems.map((item) => (
//             <div key={item.id} className="menu-card">
//               <img src={item.image} alt={item.name} className="menu-image" />
//               <div className="menu-details">
//                 <strong>{item.name}</strong>
//                 <p>{item.description}</p>
//                 <p>{item.price}</p>
//                 <div className="menu-actions">
//                   <Link
//                     to={`/dashboard/items/edit?id=${item.id}`}
//                     className="edit-link"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="delete-button"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <h3>All Users</h3>
//         <div className="users-grid">
//           {users.map((user) => (
//             <div key={user.id} className="user-card">
//               <strong>{user.username}</strong>
//               <p>{user.email}</p>
//               <p>{user.location}</p>
//               <p>{user.contact}</p>
//               <p>{user.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./admindashboard.css";

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]); // State to store users
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    fetchMenuItems();
    fetchUsers();
    fetchOrders(); // Fetch users when component mounts
  }, []);

  const fetchMenuItems = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token; // Retrieve the token from local storage
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/get`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );
      setMenuItems(response.data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const access_token = JSON.parse(
        localStorage.getItem("user")
      ).access_token; // Retrieve the token from local storage
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/users/users`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`, // Add token to headers
          },
        }
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const fetchOrders = async () => {
    try {
      const access_token = JSON.parse(
        localStorage.getItem("user")
      ).access_token;
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/order1/get-orders`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      // console.log(response.data.orders);
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token; // Retrieve the token from local storage
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/delete/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );
      fetchMenuItems(); // Refresh menu items after deletion
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user")).token; // Retrieve the token from local storage
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v2/item_bp/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
          },
        }
      );
      fetchMenuItems(); // Refresh menu items after addition
      setFormData({
        name: "",
        description: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <section>
        <h3>Menu Items</h3>
        <Link to="/dashboard/items/add">Add New Item</Link>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <strong>{item.name}</strong>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <div className="menu-actions">
                  <Link
                    to={`/dashboard/items/edit?id=${item.id}`}
                    className="edit-link"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>All Users</h3>
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.user_name}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
                <td>{user.contact}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h3>All Orders</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>RestaurantId</th>
              <th>ItemId</th>
              <th>UserId</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>

              {/* <th>totalAmount</th> */}

              <th>DeliveryInformation</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.restaurant_id}</td>

                {/* <td>{order.items.join(", ")}</td> */}
                <td>{order.item_id}</td>
                <td>{order.user_id}</td>
                <td>{order.quantity}</td>
                <td>{order.total_amount}</td>

                <td>{order.status}</td>

                <td>{order.deliveryInformation}</td>

                <td>{new Date(order.order_date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
