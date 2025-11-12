import axios from "axios"

const axiosClient = axios.create({
    baseURL:'http://localhost:3000',
    // baseURL:'https://codeshaala-backend.vercel.app',
    // baseURL: isLocalhost 
    //     ? "http://localhost:3000" 
    //     : "https://code-shaala-backend.vercel.app",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default axiosClient;

    