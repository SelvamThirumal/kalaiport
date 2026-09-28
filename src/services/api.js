import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://portbackend-ecmy.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

/**
 * Sends contact message to the Express Nodemailer API
 * @param {Object} data { name, email, phone, subject, message }
 * @returns {Promise<Object>} API response
 */
export const sendContactMessage = async (data) => {
  const response = await api.post('/contact', data);
  return response.data;
};

export default api;
