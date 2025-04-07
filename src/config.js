const isDevelopment = process.env.NODE_ENV === 'development';

export const API_URL = isDevelopment 
  ? 'http://localhost:4242'
  : 'https://taoecommerce-production.up.railway.app'; // URL que vemos en la imagen

export const FRONTEND_URL = isDevelopment
  ? 'http://localhost:4000'
  : 'https://taohoops.netlify.app'; 