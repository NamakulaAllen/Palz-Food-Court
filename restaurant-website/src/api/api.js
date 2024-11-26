import axios from "axios";

const api = axios.create({
  baseURL: " http://127.0.0.1:5000/api/v2/menus", // Update this to match your Flask backend URL
});

export const fetchMenu = () => api.get("/allmenu");

// const api = axios.create({
//   baseURL: " http://127.0.0.1:5000/api/v2/menus", // Update this to match your Flask backend URL
// });

// export const fetchMenu = () => api.get("/allmenu");

// Add more API calls as needed

// src/api/api.js

// export const fetchCategories = async () => {
//   try {
//     const response = await axios.get(
//       "http://127.0.0.1:5000/api/v2/menus/categories"
//     );
//     return response;
//   } catch (error) {
//     console.error("Error fetching menu categories:", error);
//     throw error;
//   }
// };
const contact_api = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v2/contact_bp", // Update this to match your Flask contact_bp endpoint URL
});

export const sendContactMessage = async (formData) => {
  try {
    const response = await contact_api.post(`/send`, {
      username: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      // user_id: 1,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// api.js

const API_URL = "http://localhost:5000/api/v2/review_bp";

// Function to add a new review
export const addReview = async (reviewData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, reviewData);
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

const app = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v2/items", // Update this to match your Flask backend URL
});

export const fetchCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching menu categories:", error);
    throw error;
  }
};

export const fetchMenuItems = async (category) => {
  try {
    const response = await api.get(`/items/${category}`);
    return response.data; // Assuming the response is an array of items
  } catch (error) {
    console.error(`Error fetching ${category} items:`, error);
    throw error;
  }
};

// const axiosInstance = axios.create({
//   baseURL: "/api/v2/users", // Update with your actual backend URL if needed
//   headers: {
//     "Content-Type": "application/json",
//     // Add any additional headers here if required
//   },
// });

// export const loginUser = async (userData) => {
//   try {
//     const response = await axiosInstance.post("/login", userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// api.js

// src/api.js

// Create an Axios instance with a base URL

const API = "http://127.0.0.1:5000/api/v2/users";

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error); // Log the error to console for debugging
    throw error.response?.data?.error || "An error occurred";
  }
};

const A = "http://127.0.0.1:5000/api/v2/users";

// Login user
export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${A}/login`, formData);
    return response; // Return the entire response object
  } catch (error) {
    throw error; // Throw the entire error object for better debugging
  }
};
export { A };
// const AP_URL = "http://localhost:5000/api/v2";

// export const register = (username, email, password) => {
//   return axios.post(`${AP_URL}/register`, {
//     username,
//     email,
//     password,
//   });
// };

// export const login = (email, password) => {
//   return axios.post(`${AP_URL}/login`, {
//     email,
//     password,
//   });
// };

// Add more API calls as needed

export { api };

export { app };
export { contact_api };
