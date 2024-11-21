import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../../components/Logo';
import Modal from '../../../components/Modal';

import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  const onClickSeeLocations = () => {
    navigate('/locations');
  };
  const onClickSeeHistory = () => {
    navigate('/appointments');
  };

  const onClickLogout = () => {
    setLogout(true);
  };

  return (
    <div className="dashboard">
      <div className="introduction">
        <Logo />
        <h1 className="headline">
          Your Health, Our Commitment. <br />
          Book Today for a Brighter Tomorrow!
        </h1>
        <p className="description">
          We connect you with a network of trusted hospitals and specialists,
          making it easier for you to find the right care, when you need it.
          Your health journey starts here!
        </p>
        <img
          className="intro-image"
          src="/introduction-image.png"
          alt="Introduction image"
        />
      </div>
      <div className="right-section">
        <div className="logout-container">
          <Button onClick={onClickLogout} text="Logout" />
        </div>
        <div className="locations">
          <h1 className="headline">Book Slots in your nearest Hospital</h1>
          <p className="description">
            Explore our extensive network of hospitals to find the perfect
            location for your healthcare needs. Simply click on the 'See
            Locations' tab to view nearby hospitals, read about their services,
            and check availability. Once you find a suitable option, you can
            easily book your appointment online. Your path to quality care is
            just a few clicks away!
          </p>
          <div className="location-btn-container">
            <Button onClick={onClickSeeLocations} text="See Locations" />
          </div>
        </div>
        <div className="history">
          <h1 className="headline">Explore Past and Current Bookings</h1>
          <p className="description">
            Keep track of your healthcare journey with ease! Visit the 'Past
            Bookings' section to view your appointment history. Here, you can
            review past visits, access medical notes, and quickly rebook
            appointments with your preferred providers. Your health records are
            at your fingertips—stay informed and in control!
          </p>
          <div className="location-btn-container">
            <Button onClick={onClickSeeHistory} text="View History" />
          </div>
        </div>
      </div>
      <Modal
        text="Are you sure you want to logout?"
        showmodal={logout}
        setModal={setLogout}
        onOk={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
      />
    </div>
  );
};

export default Dashboard;
