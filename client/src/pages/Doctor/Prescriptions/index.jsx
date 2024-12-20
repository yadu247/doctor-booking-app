import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';
import Button from '../../../components/Button';

import './prescriptions.css';

const Prescriptions = () => {
  const navigate = useNavigate();
  const [doctorId, setDoctorId] = useState(getId());
  const [prescriptions, setPrescriptions] = useState([]);

  const getPrescriptions = async () => {
    const response = await axios.get(`/prescription/doctor/${doctorId}`);
    setPrescriptions(response.data);
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  const onClick = () => {
    navigate('/doctor/dashboard');
  };

  return (
    <div className="appointments">
      <div className="container">
        {prescriptions.map(item => {
          return (
            <div className="appointment-card">
              <p>Date: {item.appointment.date.substr(0, 10)}</p>
              <p>
                Slot: {item.appointment.slot.startTime} -{' '}
                {item.appointment.slot.endTime}
              </p>
              <p>Patient: {item.user.email}</p>
              <p>Comments: {item.comments}</p>
            </div>
          );
        })}
      </div>
      <Button text="Home" onClick={onClick} />
    </div>
  );
};

export default Prescriptions;
