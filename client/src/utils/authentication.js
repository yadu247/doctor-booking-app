import { jwtDecode } from 'jwt-decode';

export const getRole = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  return decoded.role;
};

export const getId = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  return decoded.id;
};

export const isTokenValid = () => {
  const isValid = localStorage.getItem('token');
  return isValid;
};
