import Sidebar from '../Sidebar';
import { useState, useEffect } from 'react';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';

import './container.css';

const Container = ({ children }) => {
  const [id, setId] = useState(getId());
  const [adminData, setAdminData] = useState([]);

  const getAdminById = async () => {
    const response = await axios.get(`/admin/${id}`);
    setAdminData(response.data);
  };

  useEffect(() => {
    getAdminById();
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <nav>
          <div className="user-details-container">
            <img src={adminData.image} alt="User default image" />
            <div className="user-details">
              <p className="user-name">{adminData.role}</p>
              <p className="user-email">{adminData.email}</p>
            </div>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Container;
