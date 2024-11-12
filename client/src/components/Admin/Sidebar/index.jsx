import Logo from '../../Logo';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../../Modal';
import { useState } from 'react';

import './sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  return (
    <div className="admin-sidebar">
      <Logo />
      <Modal
        text="Are you sure you want to logout?"
        showmodal={logout}
        setModal={setLogout}
        onOk={() => {
          localStorage.removeItem('token');
          navigate('/admin/login');
        }}
      />
      <div className="admin-sidebar-menu">
        <NavLink to="/admin/dashboard" className="admin-sidebar-menu-item">
          <i class="fa-solid fa-table-columns"></i>
          Dashboard
        </NavLink>
        <NavLink to="/admin/hospitals" className="admin-sidebar-menu-item">
          <i class="fa-regular fa-hospital"></i>
          Hospitals
        </NavLink>
        <NavLink to="/admin/departments" className="admin-sidebar-menu-item">
          <i class="fa-regular fa-building"></i>
          Departments
        </NavLink>
        <NavLink to="/admin/doctors" className="admin-sidebar-menu-item">
          <i class="fa-solid fa-user-doctor"></i>
          Doctors
        </NavLink>
        <NavLink to="/admin/locations" className="admin-sidebar-menu-item">
          <i class="fa-solid fa-location-dot"></i>
          Locations
        </NavLink>
        <NavLink to="/admin/profile/" className="admin-sidebar-menu-item">
          <i class="fa-regular fa-user"></i>
          Profile
        </NavLink>
        <p
          onClick={() => {
            setLogout(true);
          }}
          className="admin-sidebar-menu-item"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          Logout
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
