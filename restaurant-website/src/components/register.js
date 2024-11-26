// // export default Register;
// import React, { useState } from "react";
// import { registerUser } from "../api/api";
// // import './Register.css'; // Assuming you want to use a separate CSS file

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     contact: "",
//     role: "customer",
//     location: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting form with data:", formData); // Debugging log
//       const response = await registerUser("/register", formData);
//       console.log("API response:", response); // Debugging log
//       if (response) {
//         setSuccess(response.message);
//         setError("");
//       } else {
//         setError("Unexpected response from the server");
//       }
//     } catch (err) {
//       console.error("API error:", err); // Debugging log
//       if (err.message === "Network error") {
//         setError("No response from server. Please check your backend server.");
//       } else if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error);
//       } else {
//         setError("An error occurred during registration");
//       }
//       setSuccess("");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">{success}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Contact:</label>
//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Role:</label>
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { registerUser } from "../api/api"; // Ensure api.js is correctly exporting registerUser function

// const Register = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     contact: "",
//     role: "customer",
//     location: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting with data:", userData); // Add this line for debugging
//     try {
//       const data = await registerUser(userData);
//       console.log("Registration successful:", data); // Log the response for debugging
//       setMessage("Registration successful");
//       setError(""); // Clear any previous errors
//       setUserData({
//         username: "",
//         email: "",
//         password: "",
//         contact: "",
//         role: "",
//         location: "",
//       });
//     } catch (err) {
//       console.error("Registration error:", err); // Log the error for debugging
//       setError(err); // Set the error message
//       setMessage(""); // Clear any previous success messages
//     }
//   };

//   return (
//     <div>
//       <h2>Create Account</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={userData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={userData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={userData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Contact:</label>
//           <input
//             type="text"
//             name="contact"
//             value={userData.contact}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Role:</label>
//           <input
//             type="text"
//             name="role"
//             value={userData.role}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={userData.location}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Register;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import { registerUser } from "../api/api"; // Ensure api.js is correctly exporting registerUser function
// import "./register.css"; // Import the CSS file

// const Register = () => {
//   const navigate = useNavigate(); // Create a navigate instance for redirection
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     contact: "",
//     role: "customer",
//     location: "",
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting with data:", userData); // Add this line for debugging
//     try {
//       const data = await registerUser(userData);
//       console.log("Registration successful:", data); // Log the response for debugging
//       setMessage("Registration successful");
//       setError(""); // Clear any previous errors
//       setUserData({
//         username: "",
//         email: "",
//         password: "",
//         contact: "",
//         role: "customer",
//         location: "",
//       });
//       // Redirect to login page after successful registration
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration error:", err); // Log the error for debugging
//       setError(err.message || "An error occurred during registration"); // Set the error message
//       setMessage(""); // Clear any previous success messages
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Create an Account</h2>
//       <form onSubmit={handleSubmit} className="register-form">
//         <div className="form-group">
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={userData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={userData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={userData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Contact:</label>
//           <input
//             type="text"
//             name="contact"
//             value={userData.contact}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Role:</label>
//           <input
//             type="text"
//             name="role"
//             value={userData.role}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={userData.location}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn-submit">
//           Create Account
//         </button>
//       </form>
//       <div className="login-link">
//         Already have an account? <a href="/login">Login</a>
//       </div>
//       {message && <p style={{ color: "green" }}>{message}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };
// <div className="image"></div>;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    role: "customer",
    location: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting with data:", userData);
    try {
      const data = await registerUser(userData);
      console.log("Registration successful:", data);
      setMessage("Account created successfully");
      setError("");
      setUserData({
        username: "",
        email: "",
        password: "",
        contact: "",
        role: "customer",
        location: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "An error occurred during registration");
      setMessage("");
    }
  };

  return (
    <div className="register-container">
      {/* Removed the image element */}
      <div className="form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={userData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={userData.role}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn-submit">
            Create Account
          </button>
        </form>
        <div className="login-link">
          Already have an account? <a href="/login">Login</a>
        </div>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
