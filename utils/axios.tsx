import axios from 'axios';

const apiKey = 'https://api.themoviedb.org/3/'; // Replace 'YOUR_API_KEY' with your actual TMDb API key

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default axiosInstance;