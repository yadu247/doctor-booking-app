import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';
import Button from '../../../components/Button';

import './appointments.css';

const Appointments = () => {
  const navigate = useNavigate();

  const [doctorId, setDoctorId] = useState(getId());
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const response = await axios.get(`/appointment/doctor/${doctorId}`);
    setAppointments(response.data);
  };

  const onClick = (appointmentId, userId) => {
    navigate('/doctor/add-prescription/' + appointmentId + '&' + userId);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="container">
      <div className="appointments">
        {appointments.map(item => {
          return (
            <div className="appointment-card">
              <p>Patient: {item.user.email}</p>
              <p>Date: {item.slot.date}</p>
              <p>Time: {`${item.slot.startTime} - ${item.slot.endTime}`}</p>
              <Button
                onClick={() => {
                  onClick(item._id, item.user._id);
                }}
                text="Add Prescription"
              />
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          navigate('/doctor/dashboard');
        }}
        text="Home"
      />
    </div>
  );
};

export default Appointments;
