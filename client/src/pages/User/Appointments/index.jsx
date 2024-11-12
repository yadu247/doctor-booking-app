import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getId } from '../../../utils/authentication';
import axios from '../../../utils/axios';
import Button from '../../../components/Button';
import './appointments.css';

const Appointments = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(getId());
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const response = await axios.get(`/appointment/${userId}`);
    setAppointments(response.data);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const onClick = id => {
    navigate('/prescriptions/' + id);
    console.log(id);
  };

  return (
    <div className="container">
      <div className="appointments">
        {appointments.map(item => {
          return (
            <div className="appointment-card">
              <p>Date: {item.slot.date}</p>
              <p>Time: {`${item.slot.startTime} - ${item.slot.endTime}`}</p>
              <p>Doctor: {item.doctor.firstname}</p>
              <p>Hopital: {item.doctor.hospital.name}</p>
              <p>Department: {item.doctor.department.name}</p>
              <Button
                onClick={() => {
                  onClick(item._id);
                }}
                text="See prescriptions"
              />
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          navigate('/dashboard');
        }}
        text="Home"
      />
    </div>
  );
};

export default Appointments;
