import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../../components/Modal';

import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  const onClickShowSlots = () => {
    navigate('/doctor/slots');
  };
  const onClickAddSlots = () => {
    navigate('/doctor/add-slots');
  };
  const onClickAppointments = () => {
    navigate('/doctor/appointments');
  };
  const onClickPrescriptions = () => {
    navigate('/doctor/prescriptions');
  };
  const onClickLogout = () => {
    setLogout(true);
  };

  return (
    <div className="doctor-dashboard">
      <Button text="Add Slots" onClick={onClickAddSlots} />
      <Button text="Show Slots" onClick={onClickShowSlots} />
      <Button text="Appointments" onClick={onClickAppointments} />
      <Button text="Prescriptions" onClick={onClickPrescriptions} />
      <Button text="Logout" onClick={onClickLogout} />

      <Modal
        text="Are you sure you want to logout?"
        showmodal={logout}
        setModal={setLogout}
        onOk={() => {
          localStorage.removeItem('token');
          navigate('/doctor/login');
        }}
      />
    </div>
  );
};

export default Dashboard;
