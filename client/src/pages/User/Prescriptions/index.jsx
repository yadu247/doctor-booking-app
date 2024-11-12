import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../components/Button';
import axios from '../../../utils/axios';
import './prescriptions.css';

const Prescriptions = () => {
  const navigate = useNavigate();
  const { appointmentId } = useParams();

  const [prescriptions, setPrescriptions] = useState([]);
  console.log(prescriptions);

  const getPrescriptions = async () => {
    const response = await axios.get(`/prescription/${appointmentId}`);
    setPrescriptions([response.data]);
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  return (
    <div className="prescriptions">
      <div className="container">
        {prescriptions.map(item => {
          return (
            <div className="prescription-card">
              <p>Hospital: {item.doctor.hospital.name}</p>
              <p>
                Doctor: {item.doctor.firstname} {item.doctor.lastname}
              </p>
              <p>
                Slot: {item.appointment.slot.startTime} -{' '}
                {item.appointment.slot.endTime}
              </p>
              <p>Comments: {item.comments}</p>
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

export default Prescriptions;
